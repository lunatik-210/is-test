'use strict';

var angular = require("angular");
var restModule = angular.module("app.rest", []);

require('./users');

module.exports = restModule.name;
