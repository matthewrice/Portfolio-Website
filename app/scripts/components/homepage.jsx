var React = require('react');

var NavBar = require('./navbar.jsx');
var Footer = require('./footer-sociallinks.jsx');


var HomePage = React.createClass({
  render: function(){
    return (
      <div className="homePageComponent">

        <NavBar />

        <div className="row">
          <div className="col-md-12">
            HOME PAGE - not sure what I am putting on the home page.  I don't
            like my original idea. Its gotta be something that grabs your
            attention.
          </div>
        </div>

        <Footer />
        
      </div>
    );
  }
});

module.exports = HomePage;
