var React = require('react');


var NavBar = React.createClass({
  render: function(){
    return (
      <div className="row navBar">
        <span className="col-md-6 websiteTitle"><a href="#homepage">Matthew Rice</a></span>
        <div className="col-md-6 navBarLinksContainer">
          <span><a className="navBarLinks aboutMeNavBarLink" href="#about-me">About Me</a></span>
          <span><a className="navBarLinks resumeNavBarLink" href="#resume">Resume</a></span>
          <span><a className="navBarLinks portfolioNavBarLink" href="#portfolio">Portfolio</a></span>
      </div>
      </div>
    );
  }
});

module.exports = NavBar;
