/**
 * @author vvaltim
 * created on 17.09.2018
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.exerciseStudent', ['ui.select', 'ngSanitize'])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('exerciseStudent', {
            url: '/exerciseStudent/listExercise',
            templateUrl: 'app/pages/exerciseStudent/listExercise/list-exercise.html',
            controller: 'ListExerciseCtrl',
            title: 'Exercícios',
            sidebarMeta: {
              icon: 'ion-ios-briefcase',
              order: 0,
            }
          });
    }
  })();