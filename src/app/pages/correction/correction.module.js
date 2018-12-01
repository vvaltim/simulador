/**
 * @author vvaltim
 * created on 17.09.2018
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.correction', ['ui.select', 'ngSanitize'])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('correction', {
            url: '/correction',
            templateUrl: 'app/pages/correction/correction.html',
            controller: 'CorrectionCtrl',
            title: 'Correção',
            params: {
              "item" : { }
            }
            // sidebarMeta: {
            //   icon: 'fas fa fa-bank',
            //   order: 0,
            // }
          });
    }
  })();