import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Header extends Component {
  render() {
    return (
      <div>
        <div id="navbar">
          <div className="list">
            <a id="logo" href="#top"><i className="far fa-smile" style={{fontSize: "35px"}}></i><h3 id="logo-text" style={{fontSize: "1.17em"}}>Website</h3></a>
            <ul id="nav-list" className="nav">
              <li className="one"><a href="#top">Home</a></li>
              <li className="two"><a href="#about">About</a></li>
              <li className="three"><a href="#info">Info</a></li>
            </ul>
            <button id="burger"className="burger"><i className="fas fa-bars"></i></button>
          </div>
        </div>
        <div className="mobile-menu" id="mobile-menu">
          <ul id="nav-mobile" className="nav-mobile">
            <li className="one"><a href="#top">Home</a></li>
            <li className="two"><a href="#about">About</a></li>
            <li className="three"><a href="#info">Contact</a></li>
          </ul>
        </div>
        <div className="overlay" id="overlay">
        </div>
    </div>
    )
  }
}

export default Header;
