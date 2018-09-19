/**
 * @author vvaltim
 * created on 17.09.2018
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.postCase', ['ui.select', 'ngSanitize'])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('postCase', {
            url: '/postCase',
            templateUrl: 'app/pages/postCase/post-case.html',
            // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
            // abstract: true,
            title: 'Postar Caso',
            sidebarMeta: {
              icon: 'ion-ios-briefcase',
              order: 0,
            },
          });
    }
  })();