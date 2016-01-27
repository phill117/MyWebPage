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
			<Grid>
		    	<Row>
		    		<Col md={4}>
		    			<ProfileComponent/>
		    		</Col>
		    		<Col md={8}> 
		    			<ResumeComponent/>
		    		</Col>
		    	</Row>
			</Grid>
		);
	}

});

module.exports.component = ContentComponent;