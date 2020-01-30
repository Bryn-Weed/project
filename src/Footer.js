import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Footer extends Component {
  render() {
    return (
      <section>
        <div className="footer-container">
          <a id="footer" href="#top"><span className="glyphicon glyphicon-menu-up"></span></a>
        </div>
      </section>
    )
  }
}

export default Footer;
