var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var port = process.env.PORT || 8000;

var COMMENTS_COLLECTION = 'comments';
var MONGODB_URI = 'mongodb://heroku_kwg772m6:rc4aur4ppp41nhk2ltv5v6v4dd@ds013004.mlab.com:13004/heroku_kwg772m6';

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var db;

mongodb.MongoClient.connect(MONGODB_URI, function(err, database) {
	if (err) {
		console.log(err);
		process.exit(1);
	}

	db = database;
	console.log('Db connection ready.');

	var server = app.listen(port, function() {
		console.log('Running on port', port);
	});
});

app.get('/comments', function(req, res) {

	console.log('app.get failed');	
	db.collection(COMMENTS_COLLECTION).find({}).toArray(function(err, docs) {
		if (err) {
			console.log('app.get failed');		
		} else {
			res.status(200).json(docs);
		}
	});
});

app.post('/comments', function(req, res) {
	var newComment = req.body;

	db.collection(COMMENTS_COLLECTION).insertOne(newComment, function(err, doc) {
		if (err) { 
			console.log('Error in db collection'); 
		} else { 
			res.status(201).json(doc.ops[0]);
		}
	});
});
