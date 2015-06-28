'use strict';

var angular = require("angular"); 
var modelsModule = angular.module("app.models");

modelsModule.factory
(
    "models.dates",
    [
        function()
        {
            var dates = {};

            dates.data = 
            [
                {
                    date: "12 октября",
                    time: "Суббота, 19:00",
                    is_active: false
                },
                {
                    date: "23 октября",
                    time: "Суббота, 19:00",
                    is_active: false
                },
                {
                    date: "30 октября",
                    time: "Суббота, 19:00",
                    is_active: false
                }
            ];

            dates.change_date = function(element, date)
            {
                element.date = date;
            };

            dates.activate = function(element)
            {
                require('../common/js/activate')(dates.data, element);
            };

            return dates;
        }
    ]
);
