var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var javascripts = '/public/javascripts/'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
});

app.get(javascripts + 'response.js', function(req, res) {
	res.sendFile(__dirname + javascripts + 'response.js');
});

app.post('/roomi-input', function(req, res) {
	var name = req.query.name;
	console.log(name);
	res.send(name);
	//res.sendFile(__dirname + '/client/views/response.html');
});

app.listen('3000', function() {
	console.log("Listening on Local Host 3000...")
});