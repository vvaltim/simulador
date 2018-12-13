(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.contestation')
        .controller('CorrectionContestationCtrl', ContestationCtrl);
  
    /** @ngInject */
    function ContestationCtrl($scope, $http, $stateParams, toastr) {
        $scope.contestation = $stateParams.item;
        console.log($scope.contestation);

        $scope.correctionContestation = function(contestationText){
            console.log(contestationText);
            $scope.contestation.correctionContestation = contestationText;
            $scope.contestation.status = 5;

            $http({
                method: 'POST',
                url: 'http://localhost:8080/exercise/update',
                data:  $scope.contestation
            }).then(function success(response) {
                console.log(response.data);
                if(response.data.responseMessage == "Salvo com sucesso"){
                    toastr.success('', 'Correção da contestação salva com sucesso', {
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
                } else {
                    toastr.error('', 'Não foi possível enviar a Correção da contestação.', {
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
            }, function onError(response) {
                toastr.error('', 'Não foi possível enviar a Correção da contestação.', {
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
            });
        }
    }
  
  })();