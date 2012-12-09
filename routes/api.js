/*
 * Serve JSON to our AngularJS client
 */


var express = require('express'),
// Provider = require('./providers/provider-memory').Provider;
Provider = require('./providers/provider-mongodb').Provider;

 
var provider = new Provider('localhost', 27017);
// GET
exports.Events = function(req, res) {	
	provider.getAll(function(error, Events) {
	res.json({
		Events: Events
	});	
//console.log(Events);
});
};


exports.Event = function(req, res) {
	var id = req.params.id;
	provider.find(id, function(error, Event) {
		res.json({
			Event: Event
		});
	});
};

// POST
exports.addEvent = function(req, res) {
	provider.save({
		NameFirst: req.body.NameFirst,
		UtilityAccountNumber: req.body.UtilityAccountNumber
	}, function(error, docs) {
      res.json(req.body);
  });
};

// PUT
exports.editEvent = function(req, res) {
	var id = req.params.id;
	provider.update(id,
		{
			NameFirst: req.body.NameFirst,
			UtilityAccountNumber: req.body.UtilityAccountNumber
		},
		function(error, docs) {
				res.json(req.body);
		}
	);
};

// DELETE
exports.deleteEvent = function(req, res) {
	var id = req.params.id;
	provider.delete(id, function(error, customer) {
		res.json(req.body);
	});
};