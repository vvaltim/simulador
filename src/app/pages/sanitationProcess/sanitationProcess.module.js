/**
 * @author vvaltim
 * created on 17.09.2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.sanitationProcess', ['ui.select', 'ngSanitize'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('sanitationProcess', {
                url: '/sanitationProcess',
                templateUrl: 'app/pages/sanitationProcess/sanitation-process.html',
                controller: 'SanitationProcessCtrl',
                title: 'Saneamento',
                params: {
                    "item": {
                    }
                }
            });
    }
})();