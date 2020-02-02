import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire_base from './config/firebase';
import Login from './Login.js';
import Home from './Home.js';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: null,
    }

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire_base.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({ user });
      }else{
        this.setState({ user : null})
      }
    })
  }

  render() {
    return (

      <div>
      {this.state.user ? (<Home/>) : (<Login/>)}
      </div>

    );
  }
}

export default App;
