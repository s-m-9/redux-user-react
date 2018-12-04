import React, { Component, Fragment } from 'react';
import './css/UserCard.css'
import avatar from './images/user.png'
import { Button } from 'reactstrap';

class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name
        }
    }

    posts = (ev) => {
        this.props.history.push('/posts/' + this.state.id); 
    }

    comments = (ev) => {
        this.props.history.push('/comments/' + this.state.id);
    }

    render() {
        return (
            <Fragment>
                <li className="user-card">
                    <img src={avatar} alt="avatar" />
                    <h4>{this.state.name}</h4>
                    <Button outline color="secondary" onClick={this.posts} ref={this.postsRef}>Posts</Button>{' '}
                    <Button outline color="secondary" onClick={this.comments} ref={this.commentsRef}>Comments</Button>
                    {/* <input onClick={this.posts} type="button" value="Posts" ref={this.postsRef} />
                    <input onClick={this.comments} type="button" value="Comments" ref={this.commentsRef} /> */}
                </li>            
            </Fragment>
        )
    }
}

export default UserCard;