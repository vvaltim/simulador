/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.correction')
        .controller('CorrectionCtrl', CorrectionCtrl);

    /** @ngInject */
    function CorrectionCtrl($scope, $state, $stateParams) {
        $scope.exercise = $stateParams;
        //atualizando a lista de exercícios com base no aluno inserido

    }

})();
