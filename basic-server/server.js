// content of index.js
const http = require('http'),
  port = 8080;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('The very basis of a node server!');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Error: ', err);
  }

  console.log(`server is listening on ${port}`);
});
