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
                    id: 1,
                    date: new Date(2015, 10, 12, 19, 0, 0, 0),
                    time: "Суббота, 19:00",
                    is_active: false
                },
                {
                    id: 2,
                    date: new Date(2015, 10, 23, 19, 0, 0, 0),
                    time: "Суббота, 19:00",
                    is_active: false
                },
                {
                    id: 3,
                    date: new Date(2015, 10, 30, 19, 0, 0, 0),
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
                require('../common/js/models').activate(dates.data, element);
            };

            dates.is_active = function(array)
            {
                return require('../common/js/models').is_active(dates.data);
            };

            return dates;
        }
    ]
);
