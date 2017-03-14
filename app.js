var express = require('express');

var app = express();

var objectQueueService = require('./objectQueueService')(app);

app.listen('3000', function() {
  console.log('The server is listening at 127.0.0.1:3000');
});
