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

class Header extends Component {
  render() {
    return (
      <section>
        <div className="jumbotron text-center">
          <h1 className="animated-reveal animate">{getFullName(user)}'s first React Page</h1>
          <p className="animated-reveal animate">Resize this responsive page to see the effect!</p>
        </div>
      </section>
    )
  }
}

export default Header;
