var express = require('express');
var app = express();

var data = {
	"dinosaurs": "are lonely",
	"why": "because all there friends are dead!"
};

var mydata = {
	"name": "Matt Herron", 
	"race": "white guy",
	"favorite color": "green",
	"friends": ['Jim', 'Tristan', 'Kate', 'Tim', 'Isaac', 'Eric', 'David', 'Chris', 'Joe', 'Sonju', 'Brad', 'Tom', 'James', 'Dylan', 'Myron']
}

app.get('/api/me', function(request, response) {
	response.send(mydata);
});

app.get ('/api', function(request, response) {
	response.send(data);
});

app.listen(5000);
console.log('the server is running on port 5000...');