var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;
var Input = ReactBootstrap.Input;
var Well = ReactBootstrap.Well

var SubscribeComponent = React.createClass({

	getInitialState: function() {
	    return {
	    	didSubscribe: false
	    };
	 },

	subscribe: function(){
		if(this.state.didSubscribe || this.refs.emailAddress.getValue() == '') return;
		this.setState({didSubscribe: 'true'});

		var musicRef = new Firebase('https://seanphillips.firebaseio.com/music');
		var blogRef = new Firebase('https://seanphillips.firebaseio.com/blog');

		if(this.refs.both.checked || this.refs.blog.checked) 
			blogRef.push(this.refs.emailAddress.getValue());
		if(this.refs.both.checked || this.refs.music.checked)
			musicRef.push(this.refs.emailAddress.getValue());
	},

	render: function(){
		var labelText = 'Subscribe to get emails when I update my BLOG or upload more MUSIC!';
		return (
			<Well><h3 style={{marginTop: '0px'}}>Subscribe!</h3>
				<form>
					<Input ref="emailAddress" bsStyle={!this.state.didSubscribe ? null : 'success'} 
						hasFeedback 
						type="email" 
						label={!this.state.didSubscribe ? labelText : "Thanks! You're now subscribed!"}
						placeholder="(e.g.) you@example.com" 
						buttonAfter={<Button onClick={this.subscribe}>
						Submit
						</Button>} />

						<p>I want to subscribe to...</p>

						<div style={{display: 'inline'}}>
					        <input ref="both" type="radio" value="Both" name="selection" defaultChecked /> Both!&nbsp;&nbsp;&nbsp;
					        <input ref="blog" type="radio" value="Blog" name="selection" /> Just the Blog&nbsp;&nbsp;&nbsp;
					        <input ref="music" type="radio" value="Music" name="selection" /> Just the Music
				        </div>
				</form>
			</Well>
		);
	}

});

module.exports.component = SubscribeComponent;