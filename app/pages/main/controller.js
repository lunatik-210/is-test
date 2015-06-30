'use strict';

var angular = require("angular"); 
var mainModule = angular.module("app.pages.main");

var mainCtrl = function($scope, restaurants, dates, ModalService, users)
{
    $scope.restaurants = restaurants;
    $scope.dates = dates;
    $scope.users = users.data;

    $scope.popup_cost_dialog = function(restaurant)
    {
        ModalService.showModal({
            templateUrl: "pages/main/cost-dialog/template.html",
            controller: "main.cost-dialog.ctrl",
            inputs: {
                cost: restaurant.cost_per_person
            }
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

    $scope.popup_date_dialog = function(date)
    {
        ModalService.showModal({
            templateUrl: "pages/main/date-dialog/template.html",
            controller: "main.date-dialog.ctrl",
            inputs: {
                date: date.date
            }
        }).then(function(modal) {
            modal.close.then(function(result) 
            {
                if(result)
                {
                    dates.change_date(date, result);
                }
            });
        });
    };
};

mainModule.controller("main.ctrl", ["$scope", "models.restaurants", "models.dates", "ModalService", "users", mainCtrl]);
