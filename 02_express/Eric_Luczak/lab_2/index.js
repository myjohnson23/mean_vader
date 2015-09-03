var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

var data = {
  "Name":"Eric",
  "Age":25
}

app.get('/api', function(req, res) {
  res.send(data);
});

app.post('/api', function(req, res) {
  res.send({
    "message": "thanks for sending some stuff!"
  });
});

app.get('/api/:id', function(req,res) {
  res.send('this is a JSON for id #' + req.params.id)
});

app.put('/api/items/:id', function(req, res) {
  res.send("Your item #" + req.params.id + " just got updated");
});

app.delete('/api/items/:id', function(req,res) {
  res.send('Ohh no.. you just deleted ' + req.params.id)
});

app.listen(5000);
console.log('running on 5000');
