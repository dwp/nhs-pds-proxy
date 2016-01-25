'use strict';

//Dependancies
var express = require('express');
var configJson = require('./config.json');
var commonTools = require('./common-tools');
var bridgeService = require('./pds-bridge-service.js');

// Constants & Settings
var PORT = (parseInt(configJson.port)) ? parseInt(configJson.port) : 9001;

// App and extensions
var app = express();

app.use(commonTools.expressRawBodyFromData);

//API
app.get('/systemStatus', bridgeService.systemStatusPage);

app.get('/queryNhsNumber', bridgeService.queryNhsNumber);

app.get('/dequeueFromBridgeToWorkerPds', bridgeService.dequeueFromBridgeToWorker);

app.post('/enqueueFromWorkerBackToBridgePds', bridgeService.enqueueFromWorkerBackToBridge);

//Initialise
app.listen(PORT);
console.log(configJson.name + ": debugLevel=" + configJson.debugLevel)
console.log(configJson.name + ": Running on http://localhost:" + PORT + " ...")