'use strict';

var angular = require("angular");

var filtersModule = angular.module("app.common.filters");

filtersModule.filter
(
	'sliceFilter', 
	[
		function() 
		{
		  	return function(arr, start, end) {
		    	return arr.slice(start, end); 
			};
		}
  	]
);
