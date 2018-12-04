import React, { Component, Fragment } from 'react';
import './css/UserItem.css'
import avatar from './images/user.png'

class UserItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            body: props.body
        }
    }

    render() {
        return (
            <Fragment>
                <li className="post-item">
                    <h2>{this.state.title}</h2>
                    <p>{this.state.body}</p>
                </li>
            </Fragment>
        )
    }
}

export default UserItem;