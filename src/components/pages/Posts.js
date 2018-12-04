import React, { Component } from 'react';
import '../css/Posts.css'
import ItemList from '../ItemList'
import Item from '../UserItem'
import Header from '../Header'
import loader from '../images/time.svg'
import { NavLink } from 'react-router-dom';
import store from '../../store'
import { addPostList } from './actions/actionCreators';

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            list: null,
            isLoading: true,
            inStore: false,
            storeList: null
        }
    }

    fetchData = () => {
        const url = "https://jsonplaceholder.typicode.com/posts?userId=" + this.state.id;
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
        // console.log("Index", this.exists(store.getState().posts, this.state.id));
        var storeData = this.exists(store.getState().posts, this.state.id) 
        
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
            store.dispatch(addPostList(this.state.id, data));
        }
      
        var itemList = data.map((post, key) => <Item title={post.title} body={post.body} key={key} />)
        this.setState({ list: itemList });
    }

    exists = (arr, id) => {
        var index = arr.findIndex((item) => { return (item.id === id) });    
        var obj = (arr.find((item) => { return (item.id === id)}))
        
        return {
            id: index,
            list: (obj) ? obj.state : null
        }
    }


    render() {
        return (
            <div>
                <Header title={"Posts"}/>
                <NavLink className="home-link" to="/"><h3>Home</h3></NavLink>
                {this.state.isLoading && (
                    // if loading is true 
                    <span><img className="loader" src={loader} alt="loading..." /></span>
                )}
                {!this.state.isLoading && this.state.list && (
                    // if loading is false
                    <ItemList list={this.state.list}/>
                )} 
            </div>
        )
    }
}

export default Posts;