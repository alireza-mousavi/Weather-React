var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      applicationStyles: 'app/styles/app.css'


      //Load in modules so that their paths do not need to be specified when using require.
      // eg. Greeter: 'public/components/Greeter.jsx',
      // GreeterMessage: 'public/components/GreeterMessage.jsx',
      // GreeterForm: 'public/components/GreeterForm.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  // Because app.jsx contains jsx code and react does not know what to do with This
  // code by default, we need to use loaders.
  module: {
    loaders: [
      {
        // telling babel loader to take our files, parse them through react, get the output
        // and then run them through es2015 as well.
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        //  to specify which files the loader shoiuld get
        // the test attribute tells the loader to parse all files ending in .jsx
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
