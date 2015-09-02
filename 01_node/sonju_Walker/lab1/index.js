  var http = require('http');
  // library for http

  var fs = require('fs');
  // library for filesystem

  var json = fs.readFileSync('./myfavs.json');

  http.createServer(function(request, response) {
    response.writeHead(200);
    response.write(json);
    response.end();
  }).listen(5000);

  console.log('Api server is up and ready');
