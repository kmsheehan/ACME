var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

Provider = function (db_name, host, port) {
    this.db = new Db(db_name, new Server(host, port, {auto_reconnect: true}, {}), {safe: false});
    this.db.open(function () {
    });
};

Provider.prototype.getCollection = function (callback) {
    this.db.createCollection('customerevents', function (error, customerevent_collection) {
        if (error) {
            callback(error);
        } else {
            callback(null, customerevent_collection);
        }
    });
};

Provider.prototype.getAll = function (callback) {
    this.getCollection(function (error, customerevent_collection) {
        if (error) {
            callback(error);
        } else {
            customerevent_collection.find().toArray(function (err, CustomerEvents) {
                if (error) {
                    callback(error);
                } else {
                    callback(null, CustomerEvents);
                }
            });
        }
    });
};

Provider.prototype.find = function (id, callback) {
    this.getCollection(function (error, customerevent_collection) {
        if (error) {
            callback(error);
        } else {
            customerevent_collection.findOne(
                {
                    _id: customerevent_collection.db.bson_serializer.ObjectID.createFromHexString(id)
                },
                function (error, result) {
                    if (error) {
                        callback(error);
                    } else {
                        callback(null, result);
                    }
                }
            );
        }
    });
};

Provider.prototype.save = function (Events, callback) {
    this.getCollection(function (error, customerevent_collection) {
        if (error) {
            callback(error);
        } else {
            if (typeof(Events.length) == "undefined") {
                Events = [Events];
            }

            customerevent_collection.insert(Events, function () {
                callback(null, Events);
            });
        }
    });
};

Provider.prototype.update = function (id, Event, callback) {
    this.getCollection(function (error, customerevent_collection) {
        if (error) {
            callback(error);
        } else {
            customerevent_collection.update({_id: customerevent_collection.db.bson_serializer.ObjectID.createFromHexString(id)}, Event, true, function (err, result) {
                callback(null, null);
            });
        }
    });
};

Provider.prototype.delete = function (id, callback) {
    this.getCollection(function (error, customer_collection) {
        if (error) {
            callback(error);
        } else {
            customer_collection.remove({_id: customer_collection.db.bson_serializer.ObjectID.createFromHexString(id)}, {safe: true}, function (err, result) {
                callback(null, result);
            });
        }
    });
};

exports.Provider = Provider;