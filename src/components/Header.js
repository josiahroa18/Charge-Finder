import React, { Component } from 'react';
import '../styles/Header.css';


export class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <img src="./assets/logo@2x.png" alt="Charge finder logo"></img>
                <div className="nav-bar">
                    <a href="./index.html">Home</a>
                    <a href="./about.html">About</a>
                </div>
            </div>
        )
    }
}

export default Header
