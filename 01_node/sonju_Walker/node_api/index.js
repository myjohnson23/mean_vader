  // library for http
  var http = require('http');
  // library for filesystem
  var fs = require('fs');

  var json = fs.readFileSync('./data.json');

  http.createServer(function(request, response) {
    response.writeHead(200);
    response.write(json);
    response.end();
  }).listen(5000);

  // console msg to let us know its running
  console.log('api server is ready');
