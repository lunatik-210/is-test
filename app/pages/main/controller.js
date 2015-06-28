'use strict';

var angular = require("angular"); 
var mainModule = angular.module("app.pages.main");

var mainCtrl = function($scope, restaurants, dates)
{
	$scope.restaurants = restaurants;
	$scope.dates = dates;
};

mainModule.controller("main.ctrl", ["$scope", "models.restaurants", "models.dates", mainCtrl]);
