/**
 * @author vvaltim
 * created on 17.09.2018
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.manageClass', ['ui.select', 'ngSanitize'])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('listClass', {
        url: '/listClass',
        templateUrl: 'app/pages/manageClass/list-class.html',
        controller: 'ListClassCtrl',
        // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
        // abstract: true,
        title: 'Gerenciar turma',
        sidebarMeta: {
          icon: 'ion-ios-briefcase',
          order: 0,
        },
      })
      .state('createClass', {
        url: '/createClass',
        templateUrl: 'app/pages/manageClass/create-class.html',
        controller: 'CreateClassCtrl',
        // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
        title: 'Criar turma',
      });
  }
})();