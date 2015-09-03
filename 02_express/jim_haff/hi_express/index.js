var express = require('express');


//name space a new instance of the express framework to app
var app = express();


// some data to send

var data = {
  'dinosaurs': 'are lonely',
  'why': 'asteroid'
};


var person = {
    'message': "don't be a dick"
}


app.get('/', function(req, res){

  res.send(jimbo);

})
// call app.get or app.post, req = request from users,
// res  = response to send
app.get('/api', function(req, res) {
  // response.send(some stuff)
  res.send(data);
});

// have the server listen on port 5000
app.listen(5000)

console.log("express is running, port 5000")
