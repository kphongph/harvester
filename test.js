var Twit = require('twit');
var config = require('./config1');

var T = new Twit(config);

var stream = T.stream('statuses/sample');
var count = 0;
stream.on('tweet', function(tweet) {
  if(tweet.lang == 'th') {
    console.log(count+' '+tweet.text);
    count++;
  }
});
