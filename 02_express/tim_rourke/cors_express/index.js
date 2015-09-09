var express			= require('express'),
		app					= express(),
		bodyParser	= require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended: true
}));

//Enable headers
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', function(req, res) {
	res.send('hullo');
});

app.post('/submit', function(req, res) {
	res.send(req.body);
	res.end();
	console.log(req.body);
	console.log(req.query);
});

app.post('/tim', function(req, res) {
	res.send(req.body.name + ' is a cool dude and is a friend of ' + req.body.friend + '.' );
});

app.listen(3000, function(err) {
	if (err) throw err;
	console.log('Express is listening on port 3000.');
});