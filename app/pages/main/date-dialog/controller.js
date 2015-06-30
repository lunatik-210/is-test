'use strict';

var angular = require("angular");
var jQuery = require("jQuery");
var mainModule = angular.module("app.pages.main");

var dateDialogCtrl = function($scope, $element, close, date)
{
    $scope.date = date;

    $scope.init = function()
    {
        $scope.dateOptions = {
            changeYear: false,
            changeMonth: true
        };

        angular.extend($scope.dateOptions, jQuery.datepicker.regional["ru"]);
    }

    $scope.close = function(result)
    {
        $element.addClass("animated fadeOut");
        close(result, 300);
    };
};

mainModule.controller("main.date-dialog.ctrl", ["$scope", "$element", "close", "date", dateDialogCtrl]);
