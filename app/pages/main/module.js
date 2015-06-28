'use strict';

var angular = require("angular");

require('angularAnimate');

var mainModule = angular.module
(
    "app.pages.main", 
    [
        "ngAnimate",
        require('angularUIRouter'),
        require('../../models/module')
    ]
);

require('./controller');

mainModule.config
(
    [
        "$stateProvider",
        function($stateProvider)
        {
            $stateProvider
            .state
            (
                "main",
                {
                    url: "/main",
                    templateUrl: "pages/main/index.html",
                    controller: "main.ctrl"
                }
            );
        }
    ]
);

module.exports = mainModule.name;
