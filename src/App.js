import React, { Component } from 'react';
import './index.css';
import logo from './ggx.png';

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

<section>

  <div class="jumbotron text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <h3>Column 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
      <div class="col-sm-4">
        <h3>Column 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
      <div class="col-sm-4">
        <h3>Column 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
    </div>
  </div>

</section>



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
