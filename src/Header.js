import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Header extends Component {
  render() {
    return (
      <section>
        <div className="navbar">
          <a href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <div className="login">
            <button type="button" className="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal">Login</button>
          </div>
        </div>
      </section>
    )
  }
}

export default Header;
