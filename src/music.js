var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Button = ReactBootstrap.Button;
var Thumbnail = ReactBootstrap.Thumbnail;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var Label = ReactBootstrap.Label;
var Panel = ReactBootstrap.Panel;
var License = require('./license').component
var SubscribeForm = require('./music_subscribe').component;

var MusicComponent = React.createClass({

	render: function(){
		return (
			<Grid>
				<Row>
				<Panel>These are some of the completed compositions I have written. Take a look! 
				If you like what you hear or would like to use any of my music in a project, shoot me an email at <a href="mailto:contact@seanphillips.me">contact@seanphillips.me</a>. 
				I would love to hear what you think. Please do not sell or use any of my compositions for profit without my knowedge. 
				If you really, REALLY, like any of my work, you can donate [here] to support my musical endeavors!</Panel>
					<Col md={3}>
						<Thumbnail src="./music/No1.jpg" alt="242x200">
					        <h3>String Quartet</h3>
					        <p>Final Project for MUS 362</p>
					        <h3>
						        <Label bsStyle='info'>2 Violins</Label>&nbsp;
						        <Label bsStyle='info'>Viola</Label>&nbsp;
						        <Label bsStyle='info'>Cello</Label>
					        </h3>
				        	<ButtonGroup justified>
				        		<Button target='_blank' href='./music/No1.mp3'>.mp3</Button>
					        	<Button target='_blank' href='./music/No1.pdf'>.pdf</Button>
					        	<Button href='./music/No1.mscz'>.mscz</Button>
				        	</ButtonGroup>
					    </Thumbnail>
					</Col>
				</Row>
				<Row>
					<SubscribeForm/>
				</Row>
				<Row>
					<Col style={{textAlign: 'center'}}>
						<License/>
					</Col>
				</Row>
			</Grid>
		);
	}

});

module.exports.component = MusicComponent;