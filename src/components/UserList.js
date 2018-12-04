import React, { Component, Fragment } from 'react';
import './css/UserList.css'

class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: this.props.list
        }
    }
    

    render() {
        return (
            <Fragment>
                <ul className="user-list">
                    { this.state.list }
                </ul>
            </Fragment>
        )
    }
}

export default UserList;