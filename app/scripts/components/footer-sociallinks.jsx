var React = require('react');
var NavBar = require('./navbar.jsx');


var Footer = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="col-md-12 footer">
          <span className="LinkedIn">
            <a className="socialIcon linkedinIcon" href="https://www.linkedin.com/in/matthewrice-developer" target="_blank">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </span>
          <span className="Twitter">
            <a className="socialIcon twitterIcon" href="https://twitter.com/MatthewRice_" target="_blank">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </span>
          <span className="GitHub">
            <a href="https://github.com/matthewrice?tab=repositories" target="_blank">
              <img className="labtocatImage" src="images/okal-eltocat.jpg" />
            </a>
          </span>
          <span>
            <a className="socialIcon newspaperIcon" href="http://upstatebusinessjournal.com/news/iron-yard-presents-student-made-apps-demo-day/" target="_blank">
              <i className="fa fa-newspaper-o" aria-hidden="true"></i>
            </a>
          </span>
          <span className="homeTown">
            <a className="contactInfo" href="http://www.visitgreenvillesc.com/" target="_blank">Greenville, SC</a>
          </span>
          <span className="emailAddress">
            <a className="contactInfo" href="mailto:developer@matthewrice.io">developer@matthewrice.io</a>
          </span>
          <span className="phoneNumber">
            <a className="contactInfo" href="tel:864-908-9385">(864) 908-9385</a>
          </span>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
