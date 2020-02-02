import React, { Component } from 'react';
import fire_base from './config/firebase';

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
          <div>
            <div>Email</div>
            <input id = "email" placeholder = "user@email.com.." type = "text"/>
          </div>
          <div>
            <div>Password</div>
            <input id = "password" placeholder = "***********" type = "text"/>
          </div>
          <button style = {{margin : '10px'}} onClick = {this.login}>Login</button>
          <button style = {{margin : '10px'}} onClick = {this.register}>Register</button>
        </div>
    )
  }
}

export default Login;

