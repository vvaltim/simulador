/**
 * @author vvaltim
 * created on 17.09.2018
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.exerciseCorrection', ['ui.select', 'ngSanitize'])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
        //   .state('exerciseCorrection', {
        //     url: '/exerciseCorrection',
        //     // templateUrl: 'app/pages/conciliationHearing/conciliation-hearing.html',
        //     // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
        //     abstract: true,
        //     title: 'Corrigir exercício',
        //     sidebarMeta: {
        //       icon: 'ion-ios-document',
        //       order: 0,
        //     },
        //   })
          .state('listExercise', {
            url: '/exerciseCorrection/listExercise',
            templateUrl: 'app/pages/exerciseCorrection/listExercise/list-exercise.html',
            // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
            // abstract: true,
            controller: 'ListExerciseCtrl',
            title: 'Corrigir Exercícios',
            sidebarMeta: {
              icon: 'fas fa fa-bank',
              order: 0,
            }
          });
    }
  })();