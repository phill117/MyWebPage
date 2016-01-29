/*
	JK This is actually the blog file
*/

var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Jumbotron = ReactBootstrap.Jumbotron;

var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var ProjectsComponent = React.createClass({

	render: function(){
		return (
			<Row style={{textAlign: 'center'}}>
				<Col xs={3}/>
				<Col xs={6}>
					<Jumbotron >
						<h1>Coming Soon...</h1>
					    <p>My Blog is still under "construction." It takes a bit to get the good 'ol juices flowing... ya know? Subscribe and I'll make sure to let you know of any additions or changes in the future. :)</p>
					</Jumbotron>
				</Col>
				<Col xs={3}/>
			</Row>
		);
	}

});

module.exports.component = ProjectsComponent;