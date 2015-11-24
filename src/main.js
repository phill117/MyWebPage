// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute

var NavBarComponent   = require('./navbar').component;
var ContentComponent  = require('./content').component;
var ProjectsComponent = require('./projects').component;
var MusicComponent    = require('./music').component;

var MainComponent = React.createClass({

  render: function(){
    return(
      <div id="content">
        <NavBarComponent/>
        {this.props.children}
      </div>
    );
  }

});

ReactDOM.render((
  <Router>
    <Route path="/" component={MainComponent}>
      <IndexRoute component={ContentComponent}/>
      <Route path="portfolio" component={ContentComponent}  />
      <Route path="projects"  component={ProjectsComponent} />
      <Route path="music"     component={MusicComponent}    />
    </Route>
  </Router>
), document.getElementById('app'));