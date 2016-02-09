// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var createBrowserHistory = require('history/lib/createBrowserHistory');
var createMemoryHistory = require('history/lib/createMemoryHistory');

var NavBarComponent   = require('./navbar').component;
var ContentComponent  = require('./content').component;
var BlogComponent = require('./projects').component;
var MusicComponent    = require('./music').component;

var ReactCSSTransitionGroup = require('react-css-transition-replace');

var MainComponent = React.createClass({

  render: function(){
    return(
      <div id="content">
        <NavBarComponent/>
        <ReactCSSTransitionGroup 
        transitionName="fade-wait"
        transitionEnterTimeout={500} 
        transitionLeaveTimeout={200}>
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }

});

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={MainComponent}>
      <IndexRoute component={ContentComponent}/>
      <Route path="portfolio" component={ContentComponent}  />
      <Route path="blog"      component={BlogComponent}     />
      <Route path="music"     component={MusicComponent}    />
    </Route>
  </Router>
), document.getElementById('app'));
// <Router history={createMemoryHistory()}>
