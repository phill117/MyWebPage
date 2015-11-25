var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Panel = ReactBootstrap.Panel;
var resume = require('./resumedata.json');

var ExperiencePart = React.createClass({

	joblisting: function(json){
		return(
			<div>
				<h2>{json.company+', '+json.location}</h2>
				<h3>{json.position}</h3>
				{json.duties.forEach(function(duty){
					<p>'&bull; '+{duty}</p>
				})}
			</div>
		);
	}, 
	
	render: function(){
		return (
			<Panel bsStyle='primary' header={<h3>Experience</h3>}>
		    	
		    </Panel>
		);
	}

});

module.exports.component = ExperiencePart;

// {
// 		    		resume.experience.forEach(this.joblisting);
// 		    	}