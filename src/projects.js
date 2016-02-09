/*
	JK This is actually the blog file
*/

var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Jumbotron = ReactBootstrap.Jumbotron;
var SubscribeForm = require('./subscribe').component;
var TreeView = require('react-treeview');
// var TreeMenu = require('react-tree-menu').TreeMenu;
// var TreeNode = require('react-tree-menu').TreeNode;
var Panel = ReactBootstrap.Panel;

var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var topics = require('./blogdata.json');

var ProjectsComponent = React.createClass({

	getInitialState: function() {
	    return {
		    content: ''
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
	    rawFile.onreadystatechange = function () {
	        if(rawFile.readyState === 4) {
	            if(rawFile.status === 200 || rawFile.status == 0) {
	            	var text = rawFile.responseText;
	            	this.setState({
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
				<Row>
					<Col xs={2}>
						<Panel style={{marginLeft: '20px'}}>
						{
							topics.map(function(item, i){
		    					return(
			    					<TreeView key={i} nodeLabel={item.topic} defaultCollapsed={true}>
		    						{
		    							item.titles.map(function(article, j){
		    								var handleClick = function(){self.readTextFile('./src/projects.js')};
		    								return(<a style={{display: 'block'}} onClick={handleClick} key={j}>{article}</a>);
		    							})
		    						}
				    				</TreeView>
								);
			    			})
						}
						</Panel>
					</Col>
					<Col xs={8}>
						<Panel>
							{this.state.content}
						</Panel>
					</Col>
					<Col xs={2}/>
				</Row>
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