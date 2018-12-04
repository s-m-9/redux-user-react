import React, { Component } from 'react';
import ItemList from '../ItemList'

import Item from '../UserItem'
import Header from '../Header'
import '../css/Comments.css'
import loader from '../images/time.svg'
import { NavLink } from 'react-router-dom';
import store from '../../store'
import { addCommentList } from './actions/actionCreators';

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            list: null,
            inStore: false,
            isLoading: true
        }
    }

    fetchData = () => {
        const url = "https://jsonplaceholder.typicode.com/comments?postId=" + this.state.id;
        fetch(url)
        .then(response => response.json())
        .then(this.showList)
        .then()
        .catch(err => {
            this.setState({ error: err.message })
        });

        this.setState({ isLoading: false })
    }

    componentDidMount() {
        var storeData = this.exists(store.getState().comments, this.state.id)
        console.log("In Comments", store.getState())
        if (storeData.list != null) {
            this.state.inStore = true;
            setTimeout(this.showList(storeData.list), 1000);
            this.setState({ isLoading: false });
        } else {
            setTimeout(this.fetchData, 1000)
        }
    }

    showList = (data) => {
        
        // this gets called once we have the array data
        if (!this.state.inStore) {
            store.dispatch(addCommentList(this.state.id, data));
        }
        var itemList = data.map((comment, key) => <Item title={comment.name} body={comment.body} key={key} />)
        this.setState({ list: itemList });
    }

    exists = (arr, id) => {
        var index = arr.findIndex((item) => { return (item.id === id) });
        var obj = (arr.find((item) => { return (item.id === id) }))

        return {
            id: index,
            list: (obj) ? obj.state : null
        }
    }

    render() {
        return (
            <div>
                <Header title={"Comments"}/>
                <NavLink className="home-link" to="/"><h3>Home</h3></NavLink>
                {this.state.isLoading && (
                    // if loading is true 
                    <span><img className="loader" src={loader} alt="loading..." /></span>
                )}
                {!this.state.isLoading && this.state.list && (
                    // if loading is false
                    <ItemList list={this.state.list} />
                )}
            </div>
        )
    }
}

export default Comments;