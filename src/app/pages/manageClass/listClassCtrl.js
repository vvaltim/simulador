(function () {
    'use strict';

    angular.module('BlurAdmin.pages.manageClass')
        .controller('ListClassCtrl', ListClassCtrl);

    /** @ngInject */
    function ListClassCtrl($scope, $state, $uibModal, $http) {
        //atualizando a lista de turmas
        updateListTeam();

        // Criando uma turma
        $scope.createClass = function (newClass) {
            newClass.codTeacher = parseInt(localStorage.getItem("codTeacher"));
            newClass.active = true;
            console.log(newClass);

            $http({
                method: 'POST',
                url: 'http://localhost:8080/team/create',
                data: newClass
            }).then(function success(response) {
                updateListTeam()
            }, function onError(response) {
                console.log(response);
            });

            //TODO: Atualizar a lista de turmas
            
        }

        $scope.openExercise = function () {
            $state.go('createClass');
        }

        $scope.editClass = function (selectedItem) {
            console.log("selectedId", selectedItem.id)
        }

        $scope.deleteClass = function (selectedItem) {
            $uibModal.open({
                animation: true,
                template: '<div class="modal-content"><div class="modal-header bg-danger"><i class="ion-android-danger modal-icon"></i><span> Atenção</span></div><div class="modal-body text-center">Tem certeza que deseja excluir a  Turma ' + selectedItem.discipline + '?</div><div class="modal-footer"><button type="button" class="btn btn-danger" ng-click="$dismiss()">Excluir</button></div></div>',
                size: 'md',
                resolve: {
                    items: function () {
                        //chamar o service de deletar o registro
                        return $scope.items;
                    }
                }
            });
        };

        $scope.saveTeacher = function(codTeacher){
            localStorage.setItem("codTeacher", parseInt(codTeacher));
        };

        function updateListTeam(){
            $http({
                method: 'GET',
                url: 'http://localhost:8080/team/allTeam/' + localStorage.getItem("codTeacher")
            }).then(function success(response) {
                $scope.classes = response.data
                console.log(response.data);
            }, function onError(response) {
                console.log(response.data);
            });
        }
    }

})();