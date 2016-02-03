var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Panel = ReactBootstrap.Panel;
var Label = ReactBootstrap.Label;
var resume = require('./resumedata.json');

var SkillsPart = React.createClass({

	render: function(){
		return (
			<Panel bsStyle='primary' header={<div><span className="fa fa-code fa-lg pull-left"></span><h4>Skills</h4></div>}>
		    	{
		    		resume.skills.map(function(skill, i){
	    				return(
		    				<h3 key={i} style={{display: 'inline-block'}}><Label bsStyle='success'>{skill}</Label>&nbsp;</h3>
						);
		    		})
		    	}
		    </Panel>
		);
	}

});

module.exports.component = SkillsPart;
