var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Panel = ReactBootstrap.Panel;
var resume = require('./resumedata.json');

var ExperiencePart = React.createClass({

	render: function(){
		return (
			<Panel bsStyle='primary' header={<h3>Experience</h3>}>
		    	{
		    		resume.experience.map(function(job, i){
	    				return(
		    				<div key={i}>
								<h2>{job.company+', '+job.location}</h2>
								<h3>{job.position}</h3>
								{job.duties.map(function(duty, j){
									return <p key={j}>&bull; {duty}</p>
								})}
							</div>
						);
		    		})
		    	}
		    </Panel>
		);
	}

});

module.exports.component = ExperiencePart;
