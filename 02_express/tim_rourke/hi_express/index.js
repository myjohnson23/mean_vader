var express		= require('express'),
		app 			= express(),
		fs				= require('fs');

var data = {
	"you": "smell like peanut lake",
	"slippers": "are unlike a couch turbo fig"
}

var tim = {
	"name": "Tim Rourke",
	"email": "tim@timrourke.com",
	"github": "github.com/timrourke"
}

function writeRequest(req, res, next) {
	fs.appendFile("./log.txt", 'New request: ' + new Date() + '\n', function(err) {
    if(err) {
        return console.log(err);
    }

	  console.log("The file was saved!");

	  next();
	}); 
}

app.use('/', writeRequest);

app.get('/', function(req, res) {
	res.send(data);
});

app.get('/api/tim', function(req, res) {
	res.send(tim);
});

app.get('/*', function(req, res) {
	res.send('anywhere');
});

app.listen(3000, function() {
	console.log('App listening on port 3000');
});
