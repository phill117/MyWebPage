var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Navbar = ReactBootstrap.Navbar;
var NavBrand = ReactBootstrap.NavBrand;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;

var NavBarComponent = React.createClass({

	render: function(){
		return (
			<Navbar fixedTop id='myNavBar'>
			  <Nav id='myInnerNav'>
			    <NavItem eventKey={1} href="#">My Portfolio</NavItem>
			    <NavItem eventKey={2} href="#">My Projects</NavItem>
			    <NavItem eventKey={3} href="#">My Music</NavItem>
			  </Nav>
			</Navbar>
		);
	}

});

module.exports.component = NavBarComponent;