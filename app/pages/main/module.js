'use strict';

var angular = require("angular");

require('angularAnimate');
require('angularModal');
require('angularUIDate');
require('jqueryUIDatePickerRu');

var mainModule = angular.module
(
    "app.pages.main", 
    [
        "ngAnimate",
        "angularModalService",
        "ui.date",
        require('angularUIRouter'),
        require('../../models/module'),
        require('../../common/js/filters/module'),
        require('../../rest/module')
    ]
);

require('./controller');
require('./cost-dialog/controller');
require('./date-dialog/controller');

mainModule.config
(
    [
        "$stateProvider",
        function($stateProvider)
        {
            $stateProvider
            .state
            (
                "main",
                {
                    url: "/main",
                    templateUrl: "pages/main/index.html",
                    controller: "main.ctrl",
                    resolve: {
                        users: [
                            "rest.users",
                            function(rest_users)
                            {
                                return rest_users.get();
                            }
                        ]
                    }
                }
            );
        }
    ]
);

module.exports = mainModule.name;
