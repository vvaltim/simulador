(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.sanitationProcess')
        .controller('SanitationProcessCtrl', SanitationProcessCtrl);
  
    /** @ngInject */
    function SanitationProcessCtrl($scope) {
        $scope.toChange = function(){
            console.log("CLICK");
        };
    }
  
  })();