var React = require('react');

//Destructuring inside arguments!
var WeatherMessage = ({temp, location}) => {
  return (
    <h2 className='text-center'>Its {temp} degrees in {location}</h2>
  )
};

module.exports = WeatherMessage;
