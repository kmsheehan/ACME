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

console.log("in app.js " + api);

http.createServer(app).listen(app.get('port'), function () {
    console.log("ACME server listening on port " + app.get('port'));
});



//for Rabbit MQ integration
var message = process.argv.slice(2).join(' ') || 'Hello Queue!';

app.post('/post-message',function(req,res){

    var connection = amqp.createConnection({host: 'localhost'});
    connection.on('ready', function(){

        connection.exchange('logs', {type: 'fanout',
            autoDelete: false}, function(exchange){

            exchange.publish('', message);
            console.log(" [x] Sent %s", message);


        });
    });

})

app.post('/get-message',function(req,res){

    var connection = amqp.createConnection({host: 'localhost'});
    connection.on('ready', function(){

        connection.exchange('logs', {type: 'fanout',
            autoDelete: false}, function(exchange){

            connection.queue('tmp-' + Math.random(), {exclusive: true},
                function(queue){

                    queue.bind('logs', '');
                    console.log(' [*] Waiting for logs. To exit press CTRL+C')

                    queue.subscribe(function(msg){
                        console.log(" [got] %s", msg.data.toString('utf-8'));
                        res.json({
                            sentMessage: msg.data.toString()
                        });

                    });
                })
        });
    });
})
