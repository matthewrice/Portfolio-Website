var React = require('react');

var NavBar = require('./navbar.jsx');
var Footer = require('./footer-sociallinks.jsx');


var Portfolio = React.createClass({
  render: function(){
    return (
      <div className="portfolioComponent">

        <NavBar />

        <div className="row">
          <div className="col-md-12">
            PORTFOLIO - This is where I will display thumbnails of my portfolio
            pieces with small icon buttons on the bottom right of each thumbnail
            that allow the user to view... <br />
            1.) a detailed description of my Portfolio piece <br />
            2.) the website itself <br />
            3.) my code on GitHub <br />
            4.) any special recognition (UBJ article) that project received <br />
            See screen shot saved in "Portfolio Design Inspiration" folder on desktop.
          </div>
        </div>

        <Footer />
        
      </div>
    );
  }
});

module.exports = Portfolio;
