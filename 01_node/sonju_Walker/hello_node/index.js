// assign a variable to an NPM Library
var http = require('http');

// http Library: create a server, and listen for requests
// and responses
http.createServer(function(request, response) {
  response.writeHead(200);   // status message 200 ok
  response.write('I just bulit a server!') // send data to server
  response.end();   // stop sending
}).listen(5000);
// localhost:5000

  console.log('My server is running (: ');
