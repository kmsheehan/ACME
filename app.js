/**
 * Module dependencies.
 */

var mu2Express = require('mu2Express'),
    express = require('express'),
    routes = require('./routes'),
    api = require('./routes/api'),
    http = require('http'),
    path = require('path')

var app = module.exports = express();


app.configure(function () {
    app.set('port', process.env.PORT || 3001);
    app.engine('mustache', mu2Express.engine)
    app.set('views', __dirname + '/views');
    app.set('view engine', 'mustache');
    app.set('view options', {
        layout: false
    });


    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
//    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
    app.use(express.errorHandler());
});

app.get('/', routes.index);

//Add code
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/CustomerEvents', api.CustomerEvents);

app.get('/api/CustomerEvent/:id', api.CustomerEvent);

app.post('/api/CustomerEvent', api.addCustomerEvent);

app.put('/api/CustomerEvent/:id', api.editCustomerEvent);

app.delete('/api/CustomerEvent/:id', api.deleteCustomerEvent);

//Add Code


http.createServer(app).listen(app.get('port'), function () {
    console.log("ACME server listening on port " + app.get('port'));
});

