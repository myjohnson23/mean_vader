var express = require('express'); 
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//enable cors
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// post request
app.post('/posts', function(req, res) {
	console.log(req.body);
	console.log(req.query); 
	res.send('got a POST request')
});

app.get('/posts', function(req, res) {
	console.log(req.body);
	console.log('finish get request');
	res.send('howdy this is a get request');
});

app.put('/posts', function(req,res) {
	console.log(req.body);
	res.send('got a PUT request');
});

app.delete('/posts', function(req,res) {
	console.log(req.body);
	res.send('got a DELETE request');
});

app.listen(5000); 
console.log('power level 5000'); 