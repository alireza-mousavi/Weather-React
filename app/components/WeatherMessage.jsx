var React = require('react');

var WeatherMessage = React.createClass({
  render : function () {
    var {temp, location} = this.props;
    
    return (
      <h2>Its {temp} degrees in {location}</h2>
    )
  },
});

module.exports = WeatherMessage;
