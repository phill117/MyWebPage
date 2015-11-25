var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Panel = ReactBootstrap.Panel;

var EducationPart = React.createClass({
	
	render: function(){
		return (
			<Panel bsStyle='primary' header={<h3>Education</h3>}>
		    	<h4>Purdue University: 2013 - 2017</h4>
		    	<p>BS in Computer Science with a concentration in Machine Learning</p>
		    </Panel>
		);
	}

});

module.exports.component = EducationPart;