var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var LicenseComponent = React.createClass({

	render: function(){
		return (
			<div>
				<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
					<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
				</a>
				<p>
					This work by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Sean Phillips</span> is licensed under a 
					<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
						Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
					</a>.
				</p>
			</div>
		);
	}

});

module.exports.component = LicenseComponent;