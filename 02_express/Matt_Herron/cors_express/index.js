var express = require('express');
var app = express();

var body_parser = require('body-parser');
app.use(body_parser.json()); //parsing json abilities
app.use(body_parser.urlencoded({ extended: true }));

// enable cors
app.use(function(request, response, next) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
}); // end cors support

//enable a post request
app.post('/submit', function(request, response) {
	// body parser shows the type of the incoming data
	console.log('reqest.body');
	console.log(request.body);
	console.log('-----------------');
	console.log('request.params');
	console.log(request.params);
	console.log('-----------------');
	console.log('request.query');
	console.log(request.query);
	console.log('-----------------');

	response.send(request.body);
});

app.post('/matt', function(request, response) {
	//check out all the data from the request
	response.send(request.body.name + " is a cool person");
});

app.listen(5000);
console.log('Server is listening on port 5000...');