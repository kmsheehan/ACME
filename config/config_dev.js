var config = {};

config.application_domain = "ep-cm-dev";
config.server_port = process.env.PORT;
config.mongodb_ip = 'localhost';
config.mongodb_name = "ACME";
config.mongodb_port = 27017;

module.exports = config;