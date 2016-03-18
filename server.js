var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require("cors");
var javascripts = '/public/javascripts/';
$ = require('jQuery');



var formData = [{
	 name: "oj simpson",
	 email: "wasntMe@gmail.com"
	}
	
	];




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req,res,next){
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	console.log(`'${req.url}'`);
	next();
});


app.use(express.static("./public"));

app.use(cors());

  
app.get("/", function(req, res) {
	res.sendFile(__dirname + '/client/views/index.html');




});

app.get("/bunki-input", function(req, res) {
	
	res.sendFile(__dirname + '/client/views/bunki-input.html')
	//formData.push(req.body);
	res.json(formData)
});


app.post("/bunki-input", function(req, res) {
formData.push(req.body);
res.json(formData);

});


app.get(javascripts + 'response.js', function(req, res) {
	res.sendFile(__dirname + javascripts + 'response.js');
});



app.listen('3000', function() {
	console.log("Listening on Local Host 3000...")
});









