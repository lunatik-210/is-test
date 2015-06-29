'use strict';

var angular = require("angular"); 
var mainModule = angular.module("app.pages.main");

var mainCtrl = function($scope, restaurants, dates, ModalService)
{
    $scope.restaurants = restaurants;
    $scope.dates = dates;

    $scope.popup_cost_dialog = function(restaurant)
    {
        ModalService.showModal({
            templateUrl: "pages/main/cost-dialog/template.html",
            controller: "main.cost-dialog.ctrl"
        }).then(function(modal) {
            modal.close.then(function(result) 
            {
                if(result && result>=0)
                {
                    restaurants.change_cost(restaurant, result);
                }
            });
        });
    };
};

mainModule.controller("main.ctrl", ["$scope", "models.restaurants", "models.dates", "ModalService", mainCtrl]);
