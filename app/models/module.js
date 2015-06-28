'use strict';

var angular = require("angular");
var modelsModule = angular.module("app.models", []);

require('./dates');
require('./restaurants');

module.exports = modelsModule.name;
