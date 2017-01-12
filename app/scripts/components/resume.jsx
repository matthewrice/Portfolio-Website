var React = require('react');

var NavBar = require('./navbar.jsx');
var Footer = require('./footer-sociallinks.jsx');


var Resume = React.createClass({
  render: function(){
    return (
      <div className="resumeComponent">

        <NavBar />

        <div className="row resumeMargins">
          <ul className="col-md-12 resume">
            <li className="resumeCategories experienceCategory">
              <div className="row">
                <div className="col-md-6 resumeCategoryHeading experienceHeading">experience</div>
                <div className="col-md-6 pdfResumeLink">
                  <a href="images/matthewrice-resume.pdf" target="_blank">View <span className="pdf">pdf</span> Resume</a>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="companyName theIronYard">The Iron Yard</div>
                  <span className="learnMore">
                    <a href="https://www.theironyard.com/courses/javascript-and-mvc-frameworks" target="_blank">(learn more)</a>
                  </span>
                  <div className="jobTitle">Front End Engineering Student &ensp;|&ensp; May 2016 &ndash; Aug 2016</div>
                  <p className="jobDescription">Acquired the skills needed to be a junior-level front end engineer in 12 weeks.</p>

                  <div className="companyName">Starbucks</div>
                  <div className="jobTitle">Shift Supervisor &ensp;|&ensp; May 2015 &ndash; May 2016</div>
                  <p className="jobDescription">Managed a team of Baristas while providing world class customer service.</p>

                  <div className="companyName">Brothers Plumbing &amp; Air</div>
                  <div className="jobTitle">Dispatcher/Office Assistant &ensp;|&ensp; June 2014 &ndash; Mar 2015</div>
                  <p className="jobDescription">Scheduled appointments for technicians based on customer requests and accomplished daily office tasks</p>

                  <div className="companyName">Starbucks</div>
                  <div className="jobTitle">Shift Supervisor &ensp;|&ensp; June 2012 &ndash; Aug 2014</div>
                  <p className="jobDescription">Managed a team of Baristas while providing world class customer service.</p>

                  <div className="companyName">Wells Fargo</div>
                  <div className="jobTitle">Personal Banker &ensp;|&ensp; Dec 2010 &ndash; May 2012</div>
                  <p className="jobDescription">Built relationships with customers, serviced their banking needs, and resolved customer complaints.</p>
                </div>
              </div>
            </li>
            <li className="resumeCategories skillsCategory">
              <div className="row">
                <div className="col-md-12 resumeCategoryHeading skillsHeading">skills</div>

                <div className="col-md-4">
                  <ul className="skillsListing">
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank">HTML5</a></li>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" target="_blank">CSS3</a></li>
                    <li><a href="http://sass-lang.com/" target="_blank">SCSS</a></li>
                    <li><a href="http://getbootstrap.com/" target="_blank">Bootstrap</a></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="skillsListing">
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a></li>
                    <li><a href="https://jquery.com/" target="_blank">jQuery</a></li>
                    <li><a href="http://underscorejs.org/" target="_blank">Underscore</a></li>
                    <li><a href="http://backbonejs.org/" target="_blank">Backbone</a></li>
                    <li><a href="https://facebook.github.io/react/index.html" target="_blank">React</a></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="skillsListing">
                    <li><a href="https://git-scm.com/" target="_blank">Git</a></li>
                    <li><a href="https://github.com/about" target="_blank">GitHub</a></li>
                    <li><a href="https://www.npmjs.com/" target="_blank">npm</a></li>
                    <li><a href="http://yeoman.io/" target="_blank">Yoeman</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="resumeCategories educationCategory">
              <div className="col-md-12 resumeCategoryHeading educationHeading">education</div>
              <ul className="educationList">
                <li>
                  <div className="schoolName">
                    <a href="https://www.theironyard.com/courses/javascript-and-mvc-frameworks" target="_blank">The Iron Yard</a>
                  </div>
                  <div className="tiyDegree">Certificate &ensp;|&ensp; Front End Engineer &ndash; JavaScript and <span className="mvc">mvc</span> Frameworks &ensp;|&ensp; May 2016 &ndash; Aug 2016</div>
                </li>
                <li>
                  <div className="schoolName">
                    <a href="http://northlandcamp.org/about-us/history" target="_blank">Northland International University</a>
                  </div>
                  <div className="niuDegree"><span className="bachelorOfArts">b.a.</span> of Arts &ensp;|&ensp; Youth Pastoral Studies &ensp;|&ensp; Aug 2001 &ndash; May 2006</div>
                </li>
              </ul>
          </li>
          </ul>
        </div>

        <Footer />

      </div>
    );
  }
});

module.exports = Resume;
