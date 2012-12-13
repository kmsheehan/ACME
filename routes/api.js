/*
 * Serve JSON to our AngularJS client
 */


var express = require('express');
var provider = require('./providers/provider-mongodb').Provider;


var db = new provider('localhost', 27017);
// GET
exports.CustomerEvents = function (req, res) {
    db.getAll(function (error, CustomerEvents) {
        res.json({
            CustomerEvents: CustomerEvents
        });
//console.log(Events);
    });
};


exports.CustomerEvent = function (req, res) {
    var id = req.params.id;
    db.find(id, function (error, CustomerEvent) {
        res.json({
            CustomerEvent: CustomerEvent
        });
    });
};

