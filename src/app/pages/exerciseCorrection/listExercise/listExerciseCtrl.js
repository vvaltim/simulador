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

        $http({
            method: 'GET',
            url: 'http://localhost:8080/exercise/listByCodTeacher/' + localStorage.getItem("codTeacher")
        }).then(function success(response) {
            $scope.teste = [];
            for(var i = 0; i < response.data.length; i++){
                var item = response.data[i];
                console.log(item);
                $scope.teste.push({
                    id: item.codExercise,
                    firstName: item.caseDescription,
                    lastName: item.initialPetition,
                    username: item.dateCreate,
                    email: item.status + "",
                    age: 'ion-close'
                });
            }
            console.log($scope.smartTableData);
            $scope.smartTablePageSize = 20;
        }, function onError(response) {
            console.log(response);
        });

        $scope.smartTableData = [
            {
                id: 1,
                firstName: 'Aluno 1',
                lastName: '6 Período, Turma 3',
                username: '23/09/2018',
                email: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien nulla, luctus non justo eu, dignissim vestibulum neque. Curabitur lectus nisi, consectetur sodales dui ut, aliquet sagittis odio. Nam sit amet feugiat enim. Donec placerat elit id risus viverra, sed cursus ligula maximus. Praesent pharetra faucibus porta. Ut pretium lorem velit, non ornare magna varius at. Phasellus vel sem laoreet, interdum est sed, vulputate orci.',
                age: 'ion-close'
            }
        ];

        $scope.openExercise = function (item) {
            console.log("Item Clicado", item);
            $state.go('contestation', { "item": item });
        }

    }

})();
