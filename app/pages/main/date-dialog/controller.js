'use strict';

var angular = require("angular"); 
var mainModule = angular.module("app.pages.main");

var dateDialogCtrl = function($scope, $element, close, date)
{
    $scope.date = date;

    $scope.close = function(result)
    {
        $element.addClass("animated fadeOut");
        close(result, 300);
    };
};

mainModule.controller("main.date-dialog.ctrl", ["$scope", "$element", "close", "date", dateDialogCtrl]);
