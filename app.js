var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 5000;

var messages = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));


app.post('/newMessage', function (req,res){
	console.log('Message post was hit!!');
	messages.push(req.body);
	//console.log(messages);
	res.sendStatus(201);
});

app.get('/updateMessage', function (req, res){
	res.send(messages);
});

app.listen(port, function() {
	console.log('listening on port', port);
});