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
            /**
             * se o status for igual 2, abrir tela para professor corrigir a petição Inicial
             */
            if(item.status == 2){
                $state.go('correctionExercise', { "item": item });
            }

            /**
             * Se p status = 6, abrir a tela para professor realizar o saneamento
             */
            if(item.status == 6){
                $state.go('sanitationProcess', { "item": item });
            }

            /**
             * Se o status = 8, abrir a tela para inserir a sentença
             */
            if(item.status == 8){
                $state.go('sentence', { "item": item });
            }

            /**
             * Status 99 - Todos podem ver, resumo do caso
             */
            if(item.status == 99){
                console.log("Item Clicado", item);
                $state.go('allCase', { "item": item });
                return
            }
        }

    }

})();
