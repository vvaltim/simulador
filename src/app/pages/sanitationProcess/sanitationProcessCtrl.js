(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.sanitationProcess')
        .controller('SanitationProcessCtrl', SanitationProcessCtrl);
  
    /** @ngInject */
    function SanitationProcessCtrl($scope, $state, $stateParams, $http, toastr) {
        $scope.exercise = $stateParams.item

        /**
         * Extinção do processo por algum erro muito grave
         */
        $scope.extinction = function(){
            $scope.exercise.status = 99;
            $scope.exercise.veredict = "Impugnação por agravo de instrumento"
            $http({
                method: 'POST',
                url: 'http://localhost:8080/exercise/update',
                data: $scope.exercise
            }).then(function success(response) {
                console.log(response.data);
                if(response.data.responseMessage == "Salvo com sucesso"){
                    toastSucess("Extinção do processo salvo com sucesso.")
                } else {
                    toastError()
                }
            }, function onError(response) {
                toastError()
            });
        }

        /**
         * Audiencia de conciliação e julgamento
         */
        $scope.conciliation = function(){
            $state.go('conciliationHearing', { "item": $scope.exercise})
        }

        $scope.toChange = function(){
            $state.go('correctionContestation', { "item": $scope.exercise})
        };

        function toastError(){
            toastr.error('', 'Não foi possível salvar.', {
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
    
        function toastSucess(message){
            toastr.success('', message, {
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