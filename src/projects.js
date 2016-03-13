/*
	JK This is actually the blog file
*/

var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Jumbotron = ReactBootstrap.Jumbotron;
var SubscribeForm = require('./subscribe').component;
var TreeView = require('react-treeview');
var Panel = ReactBootstrap.Panel;

var Menu = require('react-burger-menu').slide;

var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var topics = require('./blogdata.json');

var ProjectsComponent = React.createClass({

	getInitialState: function() {
	    return {
		    content: WelcomeShit
	    };
	},

	getDefaultProps: function() {
		return{
			key: 2
		};
	},

	readTextFile: function(file) {
	    var rawFile = new XMLHttpRequest();
	    rawFile.open("GET", file, false);
	    var self = this;
	    rawFile.onreadystatechange = function () {
	        if(rawFile.readyState === 4) {
	            if(rawFile.status === 200 || rawFile.status == 0) {
	            	var text = rawFile.responseText;
	            	self.setState({
	                	content: text
	            	});
	            }
	        }
	    }
	    rawFile.send(null);
	},

	render: function(){
		var self = this;
		return (
			<div>
				<Menu ref="theMenu" styles={styles}>
				{
					topics.map(function(item, i){
    					return(
	    					<TreeView key={i} nodeLabel={item.topic} defaultCollapsed={true}>
    						{
    							item.titles.map(function(article, j){
    								var handleClick = function(){
    									self.refs.theMenu.toggleMenu(false);
    									self.readTextFile('./blogs/'+article.file+'.html');
    								};
    								return(<a style={{display: 'block'}} onClick={handleClick} key={j}>{article.string}</a>);
    							})
    						}
		    				</TreeView>
						);
	    			})
				}
				</Menu>
				<Grid>
					<Row>
						<Col xs={12}>
							<Panel>
								<div style={{lineHeight: '170%', fontSize: '20px', textAlign: 'justify', padding: '0px 60px'}} dangerouslySetInnerHTML={{__html: this.state.content}}/>
							</Panel>
						</Col>
					</Row>
				</Grid>
				<Grid>
					<Row>
						<SubscribeForm/>
					</Row>
				</Grid>
			</div>
		);
	}

});

// <Jumbotron>
// 	<h1>Coming Soon...</h1>
//     <p>My Blog is still under "construction." It takes a bit to get the good 'ol juices flowing... ya know? Subscribe and I'll make sure to let you know of any additions or changes in the future. :)</p>
// </Jumbotron>

							
module.exports.component = ProjectsComponent;

const WelcomeShit = "<h1 style=\"text-align: center; line-height: 200%\">Welcome!</h1>"+
						"<p>As you probably know by now, this is my personal blog, since you did, in fact, willing click on the button labelled \"Blog\" at the top of the screen, just a moment ago. It is currently in its infantile stages, but I hope that after some undisclosed period of time, it will blossom into something wonderful to look back on.</p>"+
						"<p>...Or something something so haneous that I want to tear my own eyes out at the very thought of its very existance. I mean, after all, I do hate writing. And if everything goes as expected, you probably will too after reading what I have to say.</p>"+
						"<p>...but I digress.</p>"+
						"<p>I'll primarily use this blog for things like my personal projects such as my light up keyboard, my trip down under, and whatever else I deem worth to type with my precious fingers. After all, carpol tunnel is the real evil here, and I'm not distancing myself from it by click-clackin' away on this here blog.</p>";
var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
  	marginTop: '-65px',
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
  	marginTop: '-65px',
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
  	marginTop: '-65px',
    background: 'rgba(0, 0, 0, 0.3)'
  }
};