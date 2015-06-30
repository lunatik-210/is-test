'use strict';

var angular = require("angular");
var filtesModule = angular.module("app.common.filters", []);

require('./date');
require('./slice');

module.exports = filtesModule.name;
