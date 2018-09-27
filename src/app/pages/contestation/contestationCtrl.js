(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.contestation')
        .controller('ContestationCtrl', ContestationCtrl);
  
    /** @ngInject */
    function ContestationCtrl($scope, $state, $stateParams) {
        $scope.contestation = $stateParams;

        $scope.correctionContestation = function(){
            $state.go('sanitationProcess');
        }
    }
  
  })();