var express = require('express'),
  app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index')
});

app.listen(8080, function() {
  console.log('The application is running on port 8080')
});