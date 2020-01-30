import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Home from './App.js';
import Footer from './Footer.js';
import Login from './Login.js';


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<Login />, document.getElementById('login'));
