'use strict';
const glob = require("glob");
const path = require("path");
const citiesRouter = require('../routes/get/getCities');
const restify = require('restify');

exports.createServer= (options) => {

    const server = restify.createServer(options);

    // add cities routes
    citiesRouter.applyRoutes(server);

    return server;
};


// const routeFiles = glob.sync(path.join(__dirname, "./src/routes/*.js"));
//
// routeFiles.map(route => route.applyRoutes(server));