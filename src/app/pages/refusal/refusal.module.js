/**
 * @author vvaltim
 * created on 17.09.2018
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.refusal', ['ui.select', 'ngSanitize'])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('refusal', {
            url: '/refusal',
            templateUrl: 'app/pages/refusal/refusal.html',
            // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
            // abstract: true,
            title: 'Indeferimento',
            sidebarMeta: {
              icon: 'ion-ios-briefcase',
              order: 0,
            },
          });
    }
  })();