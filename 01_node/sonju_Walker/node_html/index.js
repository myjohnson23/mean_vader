  var http = require('http');
  var fs = require('fs');  // file system access!

  var html = fs.readFileSync('./index.html');
np
  http.createServer(function(request, response) {
    response.writeHead(200);
    response.write(html);
    response.end();
  }).listen(5000);

    console.log('HTML server on port 5000');
