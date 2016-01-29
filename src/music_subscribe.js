var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;
var Input = ReactBootstrap.Input;

var MusicSubscribeComponent = React.createClass({
	getInitialState: function() {
	    return {
	    	status: false
	    };
	 },

	subscribe: function(){
		console.log('heroo?');
		this.setState({status: 'true'});

		//todo

	},

	render: function(){
		return (
			<form>
				<Input bsStyle={!this.state.status ? null : 'success'} 
					hasFeedback 
					type="email" 
					label={!this.state.status ? "Subscribe to get emails when I upload more music!" : "Thanks! You're now subscribed!"}
					placeholder="Enter email..." 
					buttonAfter={<Button onClick={this.subscribe}>
					Submit
					</Button>} />
			</form>
		);
	}

});

module.exports.component = MusicSubscribeComponent;