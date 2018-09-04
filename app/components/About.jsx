var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className='text-center'>About</h1>

      <p>
        This is a weather application build on React and hoseted on Heraku.
      </p>
      <p>
        Tools used:
        <ul>
          <li>
            <a href='https://facebook.github.io/react'>React</a> - JavaScript framework
          </li>
          <li>
            <a href='https://openweathermap.org/'>Open Weather Map</a> - Weather API used in order to fetch the weather
          </li>
          <li>
            <a href='https://www.heroku.com/'>Heroku</a> - Cloud platform on which this app is hoseted on
          </li>
        </ul>
      </p>
    </div>
  )
};


module.exports = About;
