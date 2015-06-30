'use strict';

var angular = require("angular");

require('angularAnimate');
require('angularModal');

var mainModule = angular.module
(
    "app.pages.main", 
    [
        "ngAnimate",
        "angularModalService",
        require('angularUIRouter'),
        require('../../models/module'),
        require('../../common/js/filters/module')
    ]
);

require('./controller');
require('./cost-dialog/controller');
require('./date-dialog/controller');

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
