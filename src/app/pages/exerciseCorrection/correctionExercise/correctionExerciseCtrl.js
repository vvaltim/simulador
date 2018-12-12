/**
 * @author vvaltim
 * created on 11.12.2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.exerciseCorrection')
        .controller('CorrectionExerciseCtrl', CorrectionExerciseCtrl);

    /** @ngInject */
    function CorrectionExerciseCtrl($scope, toastr, $http, $stateParams, $state) {
        $scope.exercise = $stateParams.item;
        console.log($scope.exercise)
        
        /**
         * Envia o exercicio como status 99 (Empugnado)
         *  E envia o veredito
         */
        $scope.impugnar = function(initialPetitionText){
            //ficou tão errado que vai direto pra sentença
            $scope.exercise.veredict = initialPetitionText
            $scope.exercise.status = 99

            sendExercise($scope.exercise)
        }

        /** 
         * Envia o exercício como os dados da correção
         * com o status 3 (Petição inicial errada)
         */
        $scope.sendCorrection = function(initialPetitionText){
            $scope.exercise.correctionInitialPetition = initialPetitionText
            $scope.exercise.status = 3

            sendExercise($scope.exercise)
        }

        /** 
         * Envia o exercício como os dados da correção
         * com o status 4 (Aprovada)
         */
        $scope.approved = function(){
            $scope.exercise.status = 4
            $http({
                method: 'POST',
                url: 'http://localhost:8080/exercise/update',
                data: $scope.exercise
            }).then(function success(response) {
                console.log(response.data);
                if(response.data.responseMessage == "Salvo com sucesso"){
                    toastSucess()
                    //mandar para a audiencia de conciliação
                    $state.go('conciliationHearing', { "item": $scope.exercise})
                } else {
                    toastError()
                }
            }, function onError(response) {
                toastError()
            });
        }

        function sendExercise(exercise){
            $http({
                method: 'POST',
                url: 'http://localhost:8080/exercise/update',
                data: exercise
            }).then(function success(response) {
                console.log(response.data);
                if(response.data.responseMessage == "Salvo com sucesso"){
                    toastSucess()
                } else {
                    toastError()
                }
            }, function onError(response) {
                toastError()
            });
        }
    
        function toastError(){
            toastr.error('', 'Não foi possível enviar a exercício.', {
                "autoDismiss": false,
                "positionClass": "toast-bottom-right",
                "type": "error",
                "timeOut": "5000",
                "extendedTimeOut": "2000",
                "allowHtml": false,
                "closeButton": false,
                "tapToDismiss": true,
                "progressBar": false,
                "newestOnTop": true,
                "maxOpened": 0,
                "preventDuplicates": false,
                "preventOpenDuplicates": false
              });
        }
    
        function toastSucess(){
            toastr.success('', 'Exercício salvo com sucesso', {
                "autoDismiss": false,
                "positionClass": "toast-bottom-right",
                "type": "success",
                "timeOut": "5000",
                "extendedTimeOut": "2000",
                "allowHtml": false,
                "closeButton": false,
                "tapToDismiss": true,
                "progressBar": false,
                "newestOnTop": true,
                "maxOpened": 0,
                "preventDuplicates": false,
                "preventOpenDuplicates": false
              });
        }
    }

})();