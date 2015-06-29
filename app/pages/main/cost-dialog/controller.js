'use strict';

var angular = require("angular"); 
var mainModule = angular.module("app.pages.main");

var costDialogCtrl = function($scope, $element, close, cost)
{
    $scope.cost = cost;

    $scope.close = function(result)
    {
        $element.addClass("animated fadeOut");
        close(result, 300);
    };
};

mainModule.controller("main.cost-dialog.ctrl", ["$scope", "$element", "close", "cost", costDialogCtrl]);
