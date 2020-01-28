import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function getFullName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Bryn',
  lastName: 'Weed'
}

class Home extends Component {
  render() {
    return (

<div>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
  <section>
    <div className="jumbotron text-center">
      <h1 class="animated-reveal animate">{getFullName(user)}'s first React Page</h1>
      <p class="animated-reveal animate">Resize this responsive page to see the effect!</p>
    </div>
    <div className="container">
      <div className="row" style={{paddingTop: "3rem", paddingBottom: "3rem"}}>
        <div className="col-sm-4" id="info">
          <span className="glyphicon glyphicon-asterisk" aria-hidden="true" id="icon"></span>
          <h3>Column 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
        <div className="col-sm-4" id="info">
          <span className="glyphicon glyphicon-search" aria-hidden="true" id="icon"></span>
          <h3>Column 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
        <div className="col-sm-4" id="info">
          <span className="glyphicon glyphicon-plus" aria-hidden="true" id="icon"></span>
          <h3>Column 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
      </div>
    </div>
  </section>
  <section>
  <div className="container">
      <div className="row">
        <div className="col-sm-6" id="code-display">
        </div>
        <div className="col-sm-6" style={{padding: "8rem"}}>
          <h1>In-line styling is done using React instead of HTML & CSS</h1>
        </div>
      </div>
    </div>
  </section>
</div>




/*     <div>
        <section id="test">
          <div id="testing">
          <div>
            <h1>Hello React!</h1>
            <img src={logo} alt="logo"/>
            <h2>Hello {getFullName(user)}</h2>
          </div>
          </div>
        </section>
      </div>*/
    )
  }
}

export default Home;
