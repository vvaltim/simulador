/**
 * @author vvaltim
 * created on 17.09.2018
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.contestation', ['ui.select', 'ngSanitize'])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('contestation', {
        url: '/contestation',
        templateUrl: 'app/pages/contestation/contestation.html',
        // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
        // abstract: true,
        controller: 'ContestationCtrl',
        title: 'Contestação',
        // sidebarMeta: {
        //   icon: 'ion-ios-briefcase',
        //   order: 0,
        // },
        params: {
          "item" : {
          }
        }
      })
      .state('sanitationProcess', {
        url: '/contestation/sanitationProcess',
        templateUrl: 'app/pages/contestation/sanitation-process.html',
        // controller: 'SanitationProcessCtrl',
        // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
        // abstract: true,
        title: 'Saneamento',
        // sidebarMeta: {
        //   icon: 'ion-ios-briefcase',
        //   order: 0,
        // },
      });
  }
})();