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
        <div style={{ textAlign : 'center' }}>
        <div className="col-sm-3 col-centered">
        <h1> Alright mate login will ya </h1><br />
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-large">Email</span></div>
            <input id = "email" placeholder = "user@email.com.." type = "text" class="form-control"/>
          </div>
          <div class="input-group mb-3">
          <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-large">Password</span></div>
            <input id = "password" placeholder = "***********" type = "password" class="form-control"/>
          </div>
          <button style = {{margin : '10px'}} onClick = {this.login} class="btn btn-primary">Login</button>
          <button style = {{margin : '10px'}} onClick = {this.register} class="btn btn-default">Register</button>
        </div>
        </div>
    )
  }
}

export default Login;
