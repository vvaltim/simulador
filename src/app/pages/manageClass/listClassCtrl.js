(function () {
    'use strict';

    angular.module('BlurAdmin.pages.manageClass')
        .controller('ListClassCtrl', ListClassCtrl);

    /** @ngInject */
    function ListClassCtrl($scope, $state, $uibModal) {
        $scope.classes = [{
            id: "0",
            name: "Teste 1",
            period: "Primeiro Período",
        }];
        $scope.openExercise = function () {
            $state.go('createClass');
        }

        $scope.createClass = function (newClass) {
            newClass.id = Math.floor(Math.random() * 100)
            console.log(newClass);
            $scope.classes.push(newClass);
            //TODO: Chamar o serviço de persistência
        }

        $scope.editClass = function (selectedItem) {
            console.log("selectedId", selectedItem.id)
        }

        $scope.deleteClass = function (selectedItem) {
            $uibModal.open({
                animation: true,
                template: '<div class="modal-content"><div class="modal-header bg-danger"><i class="ion-android-danger modal-icon"></i><span> Atenção</span></div><div class="modal-body text-center">Tem certeza que deseja excluir a  Turma ' + selectedItem.name + '?</div><div class="modal-footer"><button type="button" class="btn btn-danger" ng-click="$dismiss()">Excluir</button></div></div>',
                size: 'md',
                resolve: {
                    items: function () {
                        //chamar o service de deletar o registro
                        return $scope.items;
                    }
                }
            });
        }

    }

})();