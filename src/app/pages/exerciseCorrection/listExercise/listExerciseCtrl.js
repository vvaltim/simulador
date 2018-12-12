/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.exerciseCorrection')
        .controller('ListCorrectionExerciseCtrl', ListCorrectionExerciseCtrl);

    /** @ngInject */
    function ListCorrectionExerciseCtrl($scope, $state, $http) {
        $scope.exercises = []
        $http({
            method: 'GET',
            url: 'http://localhost:8080/exercise/listByCodTeacher/' + localStorage.getItem("codTeacher")
        }).then(function success(response) {
            $scope.exercises = response.data
        }, function onError(response) {
            console.log(response);
        });

        $scope.openExercise = function (item) {
            //se o status for igual 2, abrir tela para professor corrigir a petição Inicial
            if(item.status == 2){
                $state.go('correctionExercise', { "item": item });
            }
        }

    }

})();
