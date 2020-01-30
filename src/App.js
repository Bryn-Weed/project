import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
  render() {
    return (

<div>
  <section>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
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
        <div className="col-sm-6" style={{padding: "5rem"}}>
          <h2>In-line styling is done using React instead of HTML & CSS</h2>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container" style={{marginTop: "20px"}}>
      <div className="row">
        <div className="col-sm-6" style={{padding: ".5rem"}}>
          <h2>The header banner, main content, and footer are now three separate js pages all rendered separately, so we can re-use the header and footer when we have multiple pages.</h2>
        </div>
        <div className="col-sm-6" id="structure-display">
        </div>
      </div>
    </div>
  </section>
</div>
    )
  }
}

export default Home;
