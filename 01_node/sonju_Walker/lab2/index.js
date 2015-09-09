
  var http = require('http');
  var fs = require('fs');

  // varialble html is retreiving file home.html
  var html = fs.readFileSync('./home.html');

  http.createServer(function(req, res) {
    res.writeHead(200);
    res.write(html);
    res.end();
  }).listen(5000);

  console.log('Server is ready port 5000');
