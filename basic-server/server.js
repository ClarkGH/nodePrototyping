const express = require('express'),
  app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(3000, () => {
  console.log('App running on port 3000!');
})