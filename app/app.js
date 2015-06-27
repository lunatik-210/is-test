'use strict';

var angular = require('angular');

require('angularAnimate');

var app = angular.module
(
    'AppModule', 
    [
        "ngAnimate",
        require('./pages/main/module')
    ]
)

app.config
(
    [
        "$urlRouterProvider",
        function($urlRouterProvider)
        {
            $urlRouterProvider.otherwise("/main");
        }
    ]
);

module.exports = app;
