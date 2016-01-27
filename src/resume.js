var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Panel = ReactBootstrap.Panel;
var resume = require('./resumedata.json');
var EducationPart = require('./education').component;
var ExperiencePart = require('./experience').component;
var SkillsPart = require('./skills').component;

// <Panel>
// 			    <Grid fluid={true}>
// 			    	<Row>
// 			    		<EducationPart/>
// 			    	</Row>
// 			    </Grid>
// 			</Panel>

var ResumeComponent = React.createClass({

	render: function(){
		return (
			<div>
				<EducationPart/>
				<ExperiencePart/>
				<SkillsPart/>
			</div>
		);
	}

});

module.exports.component = ResumeComponent;