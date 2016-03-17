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
var SubscribeForm = require('./subscribe').component;
var sheets = require('./musicdata.json');
var SheetComponent = require('./sheet').component;

var MusicComponent = React.createClass({

	getDefaultProps: function() {
		return{
			key: 3
		};
	},

	render: function(){
		return (
			<Grid>
				<Row>
					
					<Panel collapsible defaultExpanded className='MusicPanel'>These are some of the completed compositions I have written. Take a look! 
					If you like what you hear or would like to use any of my music in a project, shoot me an email at <a href="mailto:contact@seanphillips.me">contact@seanphillips.me</a>. 
					I would love to hear what you think. Please do not sell or use any of my compositions for profit without my knowedge. 
					If you really, REALLY, like any of my work, you can donate [here] to support my musical endeavors!</Panel>
					
					
					{
			    		sheets.map(function(item, i){
		    				return(
			    				<Col key={i} md={4}>
			    					<SheetComponent fileName={item.title} tags={item.tags} description={item.description} header={item.header} />
			    				</Col>
							);
			    		})
		    		}
					
				</Row>
				<Row>
					<Col xs={12}>
						<SubscribeForm/>
					</Col>
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