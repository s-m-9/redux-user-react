import React, { Component } from 'react';
import './css/Header.css'


class Header extends Component {
    render() {
        return (
            <div>
                <header className="app-header">
                    <h1>{this.props.title}</h1>
                </header>
            </div>
        )
    }
}

export default Header;