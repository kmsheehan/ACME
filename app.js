/**
 * Module dependencies.
 */

var express = require('express');
//var routes = require('./routes');
var api = require('./routes/api');
var http = require('http');

var config = require('./config')

var app = express();

app.configure(function () {
    app.set('port', config.server_port);
    app.use(express.favicon());
    app.use(express.bodyParser());
    app.use(express.logger('dev'));  //tiny, short, default
    app.use(app.router);
    app.use(express.static(__dirname + '/app'));
    app.use(express.errorHandler({dumpExceptions: true, showStack: true, showMessage: true}));
});

// JSON API
app.get('/api/CustomerEvents', api.CustomerEvents);

http.createServer(app).listen(app.get('port'), function () {
    console.log("ACME server listening on port " + app.get('port'));
});
