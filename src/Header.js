import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';



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

window.onload = function () {

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav-list").style.opacity = "1";
      document.getElementById("navbar").style.background = "white";
      document.getElementById("navbar").style.color = "black";
      document.getElementById("logo-text").style.opacity = "1";
    } else {
      document.getElementById("nav-list").style.opacity = "0";
      document.getElementById("navbar").style.background = "transparent";
      document.getElementById("navbar").style.color = "white";
      document.getElementById("logo-text").style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
  }

  }

window.onscroll = function() {
  var $win = $(window);

    $win.scroll(function () {
        if ($win.scrollTop() === 0)
            document.getElementById('navbar').classList.toggle('black');
        else if ($win.height() + $win.scrollTop()
                       === $(document).height()) {
        }
    });

    document.getElementById('burger').addEventListener('click',function() {
      document.getElementById('mobile-menu').classList.toggle('active');
      document.getElementById('overlay').classList.toggle('on');
      document.getElementById('navbar').classList.toggle('white');
    })

    document.getElementById('overlay').addEventListener('click',function() {
      document.getElementById('mobile-menu').classList.remove('active');
      document.getElementById('overlay').classList.remove('on');
      document.getElementById('navbar').classList.toggle('white');
    })
  }




export default Header;
