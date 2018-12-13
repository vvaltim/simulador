(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.contestation')
        .controller('SendContestationCtrl', SendContestationCtrl);
  
    /** @ngInject */
    function SendContestationCtrl($scope,$stateParams, $http, toastr) {
       $scope.exercise = $stateParams.item;

        $scope.send = function(contestation){
            $scope.exercise.contestation = contestation;
            $scope.exercise.status = 6

            $http({
                method: 'POST',
                url: 'http://localhost:8080/exercise/update',
                data: $scope.exercise
            }).then(function success(response) {
                console.log(response.data);
                if(response.data.responseMessage == "Salvo com sucesso"){
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