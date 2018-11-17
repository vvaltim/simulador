/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.exerciseCorrection')
        .controller('ListExerciseCtrl', ListExerciseCtrl);

    /** @ngInject */
    function ListExerciseCtrl($scope, $state, $http) {
        //atualizando a lista de exercícios com base no aluno inserido  
        $http({
            method: 'GET',
            url: 'http://localhost:8080/exercise/listByCodTeam/' + localStorage.getItem("codTeam")
        }).then(function success(response) {
            console.log(response.data);
            $scope.smartTableData = response.data;
        }, function onError(response) {
            console.log(response);
        });

        //gambis pra salvar o cod da turma logada
        $scope.saveTeam = function(codTeam){
            localStorage.setItem("codTeam", parseInt(codTeam));
        }


        $scope.openExercise = function (item) {
            console.log("Item Clicado", item);
            $state.go('contestation', { "item": item });
        }

    }

})();
