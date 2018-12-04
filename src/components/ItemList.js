import React, { Component, Fragment } from 'react';
import './css/UserList.css'
import Item from './UserItem'

class ItemList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: this.props.list
        }
    }

    render() {
        return (
            <Fragment>
                <ul className="item-list">
                    { this.state.list }
                </ul>
            </Fragment>
        )
    }
}

export default ItemList;