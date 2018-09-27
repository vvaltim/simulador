/**
 * @author vvaltim
 * created on 17.09.2018
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.sentence', ['ui.select', 'ngSanitize'])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('sentence', {
            url: '/sentence',
            templateUrl: 'app/pages/sentence/sentence.html',
            // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
            // abstract: true,
            title: 'Sentença',
            sidebarMeta: {
              icon: 'fas fa fa-bank',
              order: 0,
            },
          });
    }
  })();