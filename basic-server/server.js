// Set up server after idea fully fleshed out

const express = require('express'),
  path = require('path');

app.get('/', (req, res) => {
  res.send('Hello.');
});

app.listen(3000, () => {
  console.log('Express server running on port 3000')
})