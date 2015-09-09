  // library for http
  var http = require('http');
  // library for filesystem
  var fs = require('fs');

  var json = fs.readFileSync('./data.json');

  http.createServer(function(req, res) {
    res.writeHead(200);
    res.write(json);
    res.end();
  }).listen(5000);
  console.log('API server is ready');
