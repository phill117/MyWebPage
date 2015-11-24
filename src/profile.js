var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Panel = ReactBootstrap.Panel;
var Thumbnail = ReactBootstrap.Thumbnail;
var Image = ReactBootstrap.Image;
var Button = ReactBootstrap.Button;
var EvilIcon = require('react-evil-icons');

var ProfileComponent = React.createClass({

	render: function(){
		return (
			<Panel>
			    <Grid fluid={true}>
			    	<Row>
			    		<Col md={12}>
			    			<Image src="designs/profile_pic.jpg" circle responsive/>
						    <h2 style={{textAlign: 'center'}}>Sean Phillips</h2>
						    <p>I'm making this website right now thinking, "Man...what am I going to do with all of this screen space?" I suppose I could sell it. I hear seanphillips.me is a pretty in demand URL these days, but then again, whoever buys it might not live up to name. I could write a funny little anecdote....
....naaaah those are overrated. Besides, I hate righting papers. Why do people think I became a programmer? Because it's a fun and rewarding career choice that is high in demand in this current technological era? OF COURSE NOT!!! I haven't written an essay in over three years! It's like a dream come true!
Whelp. This little journal sesh was fun, but it's 12:55 AM, and I have class in about seven and half hours. I really need to stop procrastinating sleep. I don't know what wrong it ever did me. </p>
						    <Row>
						    	<Col md={4}><a href='https://github.com/phill117'><EvilIcon name='ei-sc-github' size='l'/></a></Col>
						    	<Col md={4}><a href='https://www.linkedin.com/in/sphillips117'><EvilIcon name='ei-sc-linkedin' size='l'/></a></Col>
						    	<Col md={4}><EvilIcon name='ei-envelope' size='l'/></Col>
						    </Row>
			    		</Col>
			    	</Row>
			    </Grid>
			</Panel>
		);
	}

});

module.exports.component = ProfileComponent;