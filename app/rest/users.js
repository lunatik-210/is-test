'use strict';

var angular = require("angular");
var restModule = angular.module("app.rest");

restModule.factory
(
    "rest.users",
    [
        "$http",
        function($http)
        {
            var users = {};

            users.get = function()
            {
                return $http.get('static/users.json');
            };

            return users;
        }
    ]
);
