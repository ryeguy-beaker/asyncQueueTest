var express = require('express');
var async = require('async');

var app = express();
var q = async.queue(function(task, callback) {
  setTimeout(function() {
    console.log('queue: ' + task.name);
    callback();
  }, 2000);
}, 2);

app.get('/', function(req, res) {
  res.json({info: 'Yep, it works.'});
});

app.get('/queue', function(req, res) {
  res.json({
    qCount: q.length(),
    currWork: q.workersList()
  });
});

app.get('/addItems', function(req, res) {
  var aBunch = [{name: '1'}, {name: '2'}, {name: '3'}, {name: '4'}, {name: '5'}, {name: '6'}, {name: '7'}, {name: '8'}, {name: '9'}, {name: '10'} ];
  q.push(aBunch, function(err) {});
});

app.listen('3000', function() {
  console.log('The server is listening at 127.0.0.1:3000');
});
