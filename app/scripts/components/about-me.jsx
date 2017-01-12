var React = require('react');

var NavBar = require('./navbar.jsx');
var Footer = require('./footer-sociallinks.jsx');


var AboutMe = React.createClass({
  render: function(){
    return (
      <div className="aboutMeComponent">

        <NavBar />

        <div className="row">
          <div className="col-md-12 familyPhoto"></div>
          <p>After spending several years working on a career at Starbucks that
            left me unfulfilled, I decided it was time to pursue my passion for
            design by attending the Iron Yard in Greenville, SC. It is at the
            Iron Yard where I was able to utilize my artistic ability, analytic
            mind, and systematic approach to learn the fundamentals of front end
            web development.</p>
          <p>The Iron Yard has given me the tools I need to begin my career as a
            junior developer, as well as the drive and eagerness to expand my
            knowledge as the industry continues to evolve.</p>
          <p>My wife and I have been married for 8 years and have a beautiful
            one year old daughter. I am a childhood cancer survivor and have
            used that life experience to create my latest project, Full Scope,
            which was recently featured in the Upstate Business Journal.</p>
        </div>

        <Footer />

      </div>
    );
  }
});

module.exports = AboutMe;
