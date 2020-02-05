import React, { Component } from 'react';
import fire_base from './config/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class Login extends React.Component{

  login(){

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    fire_base.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("User signed in");
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
      })

  }

  register(){

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    fire_base.auth().createUserWithEmailAndPassword(email, password).then((u) => {
      console.log("User account created");
    })
    .catch((err) => {
      console.log("Error: " + err.toString());
    })

  }

  render(){
    return(
    <div className="background">
      <div style={{ textAlign : 'center' }}>
        <div className="col-lg-2 col-centered">
          <form>
            <h1 style={{float: 'left', marginBottom: '25px'}}>Welcome!</h1>

            <div className="input-group mb-3" >
              <div className="input-group-prepend">
                <span className="glyphicon glyphicon-user input-group-text" aria-hidden="true" id="icon" style={{fontSize: '15px', top: '0px'}}></span>
              </div>
              <input id="email" placeholder="email" type="text" style={{fontSize: '15px'}} className="form-control"/>
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="glyphicon glyphicon-lock input-group-text" aria-hidden="true" id="icon" style={{fontSize: '15px', top: '0px'}}></span>
              </div>
              <input id="password" placeholder="password" type="password" style={{fontSize: '15px'}} className="form-control"/>
            </div>

            <button style = {{margin : '10px', fontSize: '15px'}} onClick = {this.register} className="btn btn-dark btn float-right">Sign Up</button>
            <button style = {{margin : '10px', fontSize: '15px'}} onClick = {this.login} className="btn btn-primary btn float-right">Log In</button>

          </form>
        </div>
      </div>
    </div>
    )
  }
}

export default Login;
