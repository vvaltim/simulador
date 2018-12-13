/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.allCase')
        .controller('AllCaseCtrl', AllCaseCtrl);

    /** @ngInject */
    function AllCaseCtrl($scope, $stateParams) {
        $scope.exercise = $stateParams.item
    }

})();
