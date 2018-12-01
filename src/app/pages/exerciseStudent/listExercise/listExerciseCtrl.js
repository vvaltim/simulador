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

        $scope.smartTableData = [
            {
                codExercise: 1,
                nameTeam: 'Aluno 2 Turma direito Institucional 2018/02',
                caseDescription: '6 Período, Turma 3',
                dateCreate: '23/09/2018',
                type: 'Contestação'
            },
            {
                codExercise: 2,
                nameTeam: 'Aluno 1 Turma direito Institucional 2018/02',
                caseDescription: '6 Período, Turma 3',
                dateCreate: '23/09/2018',
                type: 'Petição Inicial'
            }
        ];

        // $http({
        //     method: 'GET',
        //     url: 'http://localhost:8080/exercise/listByCodTeam/' + localStorage.getItem("codTeam")
        // }).then(function success(response) {
        //     console.log(response.data);
        //     $scope.smartTableData = response.data;
        // }, function onError(response) {
        //     console.log(response);
        // });

        //gambis pra salvar o cod da turma logada
        $scope.saveTeam = function (codTeam) {
            localStorage.setItem("codTeam", parseInt(codTeam));
        }


        $scope.openExercise = function (item) {

                console.log("Item Clicado", item);
                $state.go('correction', { "item": item });

        }

    }

})();
