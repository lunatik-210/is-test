'use strict';

var angular = require("angular");

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
