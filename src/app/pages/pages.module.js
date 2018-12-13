/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',
    'BlurAdmin.pages.postCase',
    'BlurAdmin.pages.sentence',
    'BlurAdmin.pages.initialPetition',
    'BlurAdmin.pages.refusal',
    'BlurAdmin.pages.conciliationHearing',
    'BlurAdmin.pages.contestation',
    'BlurAdmin.pages.manageClass',
    'BlurAdmin.pages.exerciseCorrection',
    'BlurAdmin.pages.exerciseStudent',
    'BlurAdmin.pages.sanitationProcess',
    'BlurAdmin.pages.allCase'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/listClass');
  }

})();
