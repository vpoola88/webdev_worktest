// Global Constants
global.ROOTPATH = __dirname;

// Dependency setup
var express = require('express');
var path = require('path');
var http = require('http');
var routes = require('./routes/routes');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Express setup
app.use(express.static(path.join(global.ROOTPATH, 'public')));

// Configure Routes
app.use('/api', routes);

// Start the actual server
var server = http.createServer(app);
server.listen('8081');
server.on('listening', () => {
  var addr = server.address();
  var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  console.log('Express listening on ' + bind);
});

module.exports = app;
