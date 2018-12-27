var express = require('express');

// Create our app
var app = express();
// PORT is upppercase because its a const.
const PORT = process.env.PORT || 3000;

// Because the free version of openweather map api only accepts http and not https, we have to
// direct all httos traffic to http. 
app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
