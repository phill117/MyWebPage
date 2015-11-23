var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var ProfileComponent = require('./profile').component;
var ResumeComponent = require('./resume').component;
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var ContentComponent = React.createClass({

	render: function(){
		return (
			<Grid fluid={true}>
		    	<Row>
		    		<Col md={3}>
		    			<ProfileComponent/>
		    		</Col>
		    		<Col md={9}> 
		    			<ResumeComponent/>
		    		</Col>
		    	</Row>
			</Grid>
		);
	}

});

module.exports.component = ContentComponent;