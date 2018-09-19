/**
 * @author vvaltim
 * created on 17.09.2018
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.initialPetition', ['ui.select', 'ngSanitize'])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('initialPetition', {
            url: '/initialPetition',
            templateUrl: 'app/pages/initialPetition/initial-petition.html',
            // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
            // abstract: true,
            title: 'Petição Inicial',
            sidebarMeta: {
              icon: 'ion-ios-briefcase',
              order: 0,
            },
          });
    }
  })();