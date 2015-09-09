var express			= require('express'),
		app					= express()
		fs					= require('fs');

var whee = require('./weirdshit.json');

app.get('/', function(req, res) {
	fs.readFile('./weirdshit.json', 'utf8', function(err, whee) {
		if (err) throw err;
		res.send(whee);	
	});
});

app.listen(3000, function() {
	console.log('Listening on port 3000;');
});