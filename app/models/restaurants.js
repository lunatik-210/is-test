'use strict';

var angular = require("angular"); 
var modelsModule = angular.module("app.models");

modelsModule.factory
(
    "models.restaurants",
    [
        function()
        {
            var restaurants = {};

            restaurants.data = 
            [
                {
                    id: 1,
                    name: "Эларджи",
                    cuisine: "Грузинская кухня",
                    cost_per_person: 2500,
                    is_active: false
                },
                {
                    id: 2,
                    name: "Оливковый пляж",
                    cuisine: "Европейская кухня",
                    cost_per_person: 1500,
                    is_active: false
                },
                {
                    id: 3,
                    name: "Dandy Cafe",
                    cuisine: "Европейская кухня",
                    cost_per_person: 3200,
                    is_active: false
                }
            ];

            restaurants.change_cost = function(element, cost)
            {
                element.cost_per_person = cost;
            };

            restaurants.activate = function(element)
            {
                require('../common/js/activate')(restaurants.data, element);
            };

            return restaurants;
        }
    ]
);
