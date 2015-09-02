var express = require('express');
//namespace instance of express framework
var app = express(); 

var data = {
	"dinosaurs": "are escaping",
	"why": "because jurassic park was a dumb idea"
};

var me = {
	"name": "????",
	"purpose": "nil",
	"ancestory": "triangle"
};

app.get('/', function(req, res){
	res.send(me); 
});

app.get('/api', function(req, res){
	res.send(data);
});

app.listen(5000); 

var log = "express";
for (i in log) {
	console.log(log[i]); 
}