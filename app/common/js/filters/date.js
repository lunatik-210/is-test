'use strict';

var angular = require("angular");
var moment = require("moment");

var filtersModule = angular.module("app.common.filters");

filtersModule.filter
(
    'dateFilter',
    [
        function() 
        {   
            return function(input) 
            {
                return moment(input).locale("ru").format("DD MMMM");
            };
        }
    ] 
);

filtersModule.filter
(
    'timeFilter',
    [
        function() 
        {   
            return function(input) 
            {
                return moment(input).locale("ru").format("dddd, HH:mm");
            };
        }
    ] 
);