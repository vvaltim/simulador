(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.initialPetition')
        .controller('InitialPetitionCtrl', InitialPetitionCtrl);
  
    /** @ngInject */
    function InitialPetitionCtrl($scope, $http, $stateParams, toastr) {
        $scope.case = $stateParams.item;

        $scope.save = function(initialPetitionText){
            $scope.case.initialPetition = initialPetitionText
            $scope.case.status = 2
            console.log($scope.case)
            $http({
                method: 'POST',
                url: 'http://localhost:8080/exercise/update',
                data: $scope.case
            }).then(function success(response) {
                console.log(response.data);
                if(response.data.responseMessage == "Salvo com sucesso"){
                    $scope.initialPetitionText = ""
                    toastr.success('', 'Petição inicial salva com sucesso', {
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
                    toastr.error('', 'Não foi possível enviar a petição inicial.', {
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
                console.log(response);
            });
        }
    }
  
  })();