var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Panel = ReactBootstrap.Panel;
var Thumbnail = ReactBootstrap.Thumbnail;
var Image = ReactBootstrap.Image;
var Button = ReactBootstrap.Button;

var ProfileComponent = React.createClass({

	render: function(){
		return (
			<Panel>
			    <Grid fluid={true}>
			    	<Row>
			    		<Col md={12}>
			    			<Image src="designs/profile_pic.jpg" circle responsive/>
						    <h3>Sean Phillips</h3>
						    <p>Yup, It ME</p>
			    		</Col>
			    	</Row>
			    </Grid>
			</Panel>
		);
	}

});

module.exports.component = ProfileComponent;