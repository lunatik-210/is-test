'use strict';

var angular = require("angular"); 
var mainModule = angular.module("app.pages.main");

var mainCtrl = function($scope, restaurants, dates)
{
    $scope.restaurants = restaurants;
    $scope.dates = dates;

    $scope.popup = function()
    {
        $scope.popupIsHidden = !$scope.popupIsHidden;
    };
};

mainModule.controller("main.ctrl", ["$scope", "models.restaurants", "models.dates", mainCtrl]);
