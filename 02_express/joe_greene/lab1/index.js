var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function(req, res) {
  fs.readFile('./data.json', 'utf8', function(err, data) {
    if (err) throw err;
    res.send(data);
  });
});

// have the server listen on 5000
app.listen(5000);
console.log("Express is running! port 5000");
