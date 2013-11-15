var Twit = require('twit');
var config = require('./config1');

var T = new Twit(config);
var stream = T.stream('statuses/sample');

var couchdb = require('felix-couchdb');
client = couchdb.createClient(5984,'localhost');
db = client.db('twitter');

var count = 0;
stream.on('tweet', function(tweet) {
  console.log('tweet #'+count+' ');
  count++;
  db.saveDoc(tweet);
});


/*
var count = 0;
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/admin", function(err, db) {
  if(err) { return console.dir(err) };
  db.collection('twitter', function(err, collection) {
    var count = 0;
    stream.on('tweet', function(tweet) {
      collection.insert(tweet,{w:1}, function(err, result) {
        console.log('tweet #'+count+' ');
        count++;
        if(err) { return console.dir(err) };
      });
    });
  });
});
*/


