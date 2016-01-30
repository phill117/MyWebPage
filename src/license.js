var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var LicenseComponent = React.createClass({

	render: function(){
		return (
			<div style={{marginBottom: '20px'}}>
				<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
					<img alt="Creative Commons License" style={{borderWidth:0}} src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
				</a>
				<br />
				These works are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
					Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
				</a>.
			</div>	
		);
	}
});

module.exports.component = LicenseComponent;


