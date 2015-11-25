var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Button = ReactBootstrap.Button;
var Thumbnail = ReactBootstrap.Thumbnail;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var Label = ReactBootstrap.Label;

var MusicComponent = React.createClass({

	render: function(){
		return (
			<Grid>
				<Row>
					<Col md={3}>
						<Thumbnail src="./music/No1.jpg" alt="242x200">
					        <h3>String Quartet</h3>
					        <p>Final Project for MUS 362</p>
					        <h3>
						        <Label bsStyle='info'>2 Violins</Label>
						        <Label bsStyle='info'>Viola</Label>
						        <Label bsStyle='info'>Cello</Label>
					        </h3>
				        	<ButtonGroup justified>
				        		<Button href='./music/No1.mp3'>.mp3</Button>
					        	<Button href='./music/No1.pdf'>.pdf</Button>
					        	<Button href='./music/No1.mscz'>.mscz</Button>
				        	</ButtonGroup>
					    </Thumbnail>
					</Col>
				</Row>
			</Grid>
		);
	}

});

module.exports.component = MusicComponent;