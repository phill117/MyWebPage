// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
var PageHeader = ReactBootstrap.PageHeader;
var Navbar = ReactBootstrap.Navbar;
var NavBrand = ReactBootstrap.NavBrand;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;

const pageHeaderInstance = (
  <PageHeader>Sean Phillips <small>Welcome to my site.</small></PageHeader>
);

const navbarInstance = (
  <Navbar>
    <NavBrand>Welcome</NavBrand>
    <Nav>
   	  <NavItem eventKey={1} href="#">My Portfolio</NavItem>
      <NavItem eventKey={2} href="#">My Projects</NavItem>
      <NavItem eventKey={3} href="#">My Music</NavItem>
    </Nav>
  </Navbar>
);

ReactDOM.render(
  navbarInstance,
  document.getElementById('example')
);
