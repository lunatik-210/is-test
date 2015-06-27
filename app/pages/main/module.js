'use strict';

var angular = require("angular");

var mainModule = angular.module
(
    "app.pages.main", 
    [
        require('angularUIRouter')
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
