var express = require('express');
var app = express();
var fs = require('fs');

data = fs.readFileSync('./data.json');

app.get('/api', function (request, response) {
	response.write(data);
	response.end();
});

app.listen(5000);
console.log('running on port 5000...');

function get_data(path) {
	return fs.readFileSync(path);
}