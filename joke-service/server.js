// Set up server after idea fully fleshed out

const express = require('express'),
  path = require('path'),
  app = express();


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000, () => {
  console.log('Express server running on port 3000')
})