var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Fuck the police!');
});

app.listen(8080, function() {
  console.log('The application is running on port 8080')
});