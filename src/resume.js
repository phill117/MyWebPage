var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Panel = ReactBootstrap.Panel;

var resume = {
	alTitle: 'Software Engineering Intern',
	alDuties: 
			['Integrated third-party analytics software Optimizely and Segment into SnapFix web application pipeline',
			'Collaborated with the Product team to produce a responsive and appealing frontend component in React.js for the SnapFix Web application.',
			'Restructured the backend advertising bounded context for use as a distributable Scala-Play micro-service.']
};

// var joblisting = function(json){
// 	return(
// 		<div>
// 			<h3>{json.company+', '+json.location}</h3>
// 			<h4>{json.position}</h4>
// 			{json.duties.forEach(function(duty){
// 				<p>'&bull; '+{duty}</p>
// 			})}
// 		</div>
// }



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