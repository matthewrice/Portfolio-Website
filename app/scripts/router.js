var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var HomePage = require('./components/homepage.jsx');
var AboutMe = require('./components/about-me.jsx');
var Portfolio = require('./components/portfolio.jsx');
var Resume = require('./components/resume.jsx');

var Router = Backbone.Router.extend({
  routes: {
    '': 'homePage',
    'homepage': 'homePage',
    'about-me': 'aboutMe',
    'portfolio': 'portfolio',
    'resume': 'resume'
  },
  homePage: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(HomePage, {router: self}),
      document.getElementById('app')
    );
  },
  aboutMe: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(AboutMe, {router:self}),
      document.getElementById('app')
    );
  },
  portfolio: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(Portfolio, {router:self}),
      document.getElementById('app')
    );
  },
  resume: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(Resume, {router:self}),
      document.getElementById('app')
    );
  }
});


var router = new Router();
module.exports = router;
