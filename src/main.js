// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');

var NavBarComponent = require('./navbar').component;
var ContentComonent = require('./content').component;

ReactDOM.render(
  React.createElement(NavBarComponent),
  document.getElementById('navbar')
);  

ReactDOM.render(
  React.createElement(ContentComonent),
  document.getElementById('content')
);  