import React, { Component, Fragment } from 'react';
import { createStore } from 'redux'
import Header from '../Header'
import Card from '../UserCard'
import Item from '../UserItem'
import listManager from './reducers/reducer'
import store from '../../store'
import actionCreator from './actions/actionCreators'
// import addList from './actions/addList'
import UserList from '../UserList'


import { connect } from 'react-redux';
import { addUserList } from './actions/actionCreators';


// const store = createStore(listManager)

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
            isLoading: true
        }
    }

  

    fetchData = () => {
        const url = "https://jsonplaceholder.typicode.com/users";

        fetch(url)
        .then(response => response.json())
        .then(this.showList)
        .then()
        .catch(err => {
            this.setState({ error: err.message })
        });

        this.setState({ isLoading: false });
        // store.dispatch(userL)
    }

    componentDidMount() {
        console.log("In Users", store.getState() )
        if (store.getState().list.length == 0) {
            console.log("FETCH");
            setTimeout(this.fetchData, 500)
        } else {
            console.log("LOAD FROM STORE");
            console.log("BACK", store.getState());
            setTimeout(this.showList(store.getState().list), 500);
        }
        
    }

    showList = (data) => {
        // this gets called once we have the array data
        var userList = data.map((user, key) => <Card history={this.props.history} id={user.id} name={user.name} getPosts={this.getPosts} key={key} />)
        this.setState({ list: userList });
        if (store.getState().list.length == 0) {
            store.dispatch(addUserList(data));
            console.log("USER SHOW LIST", store.getState());
        } else {
            this.setState({ isLoading: false });
        }
        
        // console.log(store.getState());
        // console.log(this.state.list)
    }
    
    render() {
        return (
            <Fragment>
                <Header title={"Users"}/>
                <br />
                {this.state.isLoading && (
                    // if loading is true 
                    <span>Loading Users...</span>
                )}
                {!this.state.isLoading && this.state.list && (
                    <UserList list={this.state.list} />
                )}
            </Fragment>
        )
    }
}

export default Users;