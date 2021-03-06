var React = require('react');
var ReactDOM = require('react-dom');
//below is same as var Route = require('react=router').Route; The line below is using
//ES6 destructoring  syntax.
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load foundations
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// requires the files for all files and components.
// applicationStyle is loaded into the css loader first and then to the styoe loader.
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path='about' component={About}/>
      <Route path='examples' component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
