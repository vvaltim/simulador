(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.conciliationHearing')
        .controller('ConciliationHearingCtrl', ConciliationHearingCtrl);

    function ConciliationHearingCtrl($scope, $stateParams, $http, toastr) {
        var exercise = $stateParams.item;
        console.log(exercise);

        $scope.saveConciliation = function(conciliationHearing){
            console.log(conciliationHearing);
            $http({
                method: 'POST',
                url: 'http://localhost:8080/conciliation/createOrUpdate',
                data: conciliationHearing
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