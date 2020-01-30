import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Header extends Component {
  render() {
    return (
        <div className="navbar">
          <div className="page-links">
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="login">
            <button type="button" className="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal">Login</button>
          </div>
        </div>      
    )
  }
}

export default Header;
