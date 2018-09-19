/**
 * @author vvaltim
 * created on 17.09.2018
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.conciliationHearing', ['ui.select', 'ngSanitize'])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('conciliationHearing', {
            url: '/conciliationHearing',
            templateUrl: 'app/pages/conciliationHearing/conciliation-hearing.html',
            // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
            // abstract: true,
            title: 'Audiência de conciliação',
            sidebarMeta: {
              icon: 'ion-ios-briefcase',
              order: 0,
            },
          });
    }
  })();