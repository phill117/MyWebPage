var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Panel = ReactBootstrap.Panel;

var ResumeComponent = React.createClass({

	render: function(){
		return (
			<Panel>
			    <Grid fluid={true}>
			    	<Row>
			    		<h1>RESUME</h1>
			    	</Row>
			    </Grid>
			</Panel>
		);
	}

});

module.exports.component = ResumeComponent;