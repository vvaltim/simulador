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
        controller: 'ContestationCtrl',
        title: 'Contestação',
        params: {
          "item": {
          }
        }
      })
      .state('sendContestation', {
        url: '/sendContestation',
        templateUrl: 'app/pages/contestation/sendContestation/send-contestation.html',
        controller: 'SendContestationCtrl',
        title: 'Contestação',
        params: {
          "item": {
          }
        }
      })
      .state('correctionContestation', {
        url: '/correctionContestation',
        templateUrl: 'app/pages/contestation/correctionContestation/correction-contestation.html',
        controller: 'CorrectionContestationCtrl',
        title: 'Corrigir Contestação',
        params: {
          "item": {
          }
        }
      });
  }
})();