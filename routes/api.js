/*
 * Serve JSON to our AngularJS client
 */


var express = require('express'),
// Provider = require('./providers/provider-memory').Provider;
    Provider = require('./providers/provider-mongodb').Provider;


var provider = new Provider('localhost', 27017);
// GET
exports.CustomerEvents = function (req, res) {
    provider.getAll(function (error, CustomerEvents) {
        res.json({
            CustomerEvents: CustomerEvents
        });
//console.log(Events);
    });
};


exports.CustomerEvent = function (req, res) {
    var id = req.params.id;
    provider.find(id, function (error, CustomerEvent) {
        res.json({
            CustomerEvent: CustomerEvent
        });
    });
};

// POST
exports.addCustomerEvent = function (req, res) {
    provider.save({
        NameFirst: req.body.NameFirst,
        UtilityAccountNumber: req.body.UtilityAccountNumber
    }, function (error, docs) {
        res.json(req.body);
    });
};

// PUT
exports.editCustomerEvent = function (req, res) {
    var id = req.params.id;
    provider.update(id,
        {
            NameFirst: req.body.NameFirst,
            UtilityAccountNumber: req.body.UtilityAccountNumber
        },
        function (error, docs) {
            res.json(req.body);
        }
    );
};

// DELETE
exports.deleteCustomerEvent = function (req, res) {
    var id = req.params.id;
    provider.delete(id, function (error, customer) {
        res.json(req.body);
    });
};