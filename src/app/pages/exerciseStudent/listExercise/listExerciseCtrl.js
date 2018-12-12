/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.exerciseStudent')
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

        $scope.saveStudent = function(codStudent){
            localStorage.setItem("codStudent", parseInt(codStudent));
        }


        $scope.openExercise = function (item) {
            /**
             * Status 1 - Aluno 1 vai postar a petição inicial
             */
            if(item.status == 1 && localStorage.getItem("codStudent") == "1"){
                console.log("Item Clicado", item);
                $state.go('initialPetition', { "item": item });
                return
            }

            /**
             * Status 3- Aluno 1 vai corrigir a petição inicial
             */
            if(item.status == 3 && localStorage.getItem("codStudent") == "1"){
                console.log("Item Clicado", item);
                $state.go('initialPetition', { "item": item });
                return
            }
            
        }

    }

})();
