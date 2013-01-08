/*
 * Serve JSON to our AngularJS client
 */


var express = require('express');
var provider = require('./providers/provider-mongodb').Provider;


var config = require('../config')
var db = new provider(config.mongodb_name, config.mongodb_ip, config.mongodb_port);

console.log(" db" + db);
// GET
exports.CustomerEvents = function (req, res) {

    db.getAll(function (error, CustomerEvents) {
        res.json({
            CustomerEvents: CustomerEvents
        });
    });
};


exports.CustomerEvent = function (req, res) {
    var id = req.params.id;
    db.find(id, function (error, CustomerEvents) {
        res.json({
            CustomerEvent: CustomerEvent
        });
    });
};
