var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Navbar = ReactBootstrap.Navbar;
var NavBrand = ReactBootstrap.NavBrand;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var LinkContainer = require('react-router-bootstrap').LinkContainer;

var NavBarComponent = React.createClass({

	render: function(){
		return (
			<Navbar fixedTop id='myNavBar'>
			  <Nav id='myInnerNav'>
			    <LinkContainer to="/portfolio"><NavItem eventKey={1}>My Portfolio</NavItem></LinkContainer>
			    <LinkContainer to="/blog"><NavItem eventKey={2}>My Blog</NavItem></LinkContainer>
			    <LinkContainer to="/music"><NavItem eventKey={3}>My Music</NavItem></LinkContainer>
			  </Nav>
			</Navbar>
		);
	}

});

module.exports.component = NavBarComponent;