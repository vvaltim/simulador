(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.conciliationHearing')
        .controller('ConciliationHearingConfirmCtrl', ConciliationHearingConfirmCtrl);

    function ConciliationHearingConfirmCtrl($scope, $stateParams, $http, toastr) {
        var exercise = $stateParams.item;
        $scope.conciliation = [];
        $scope.isDisabled = false;

        $http({
            method: 'GET',
            url: 'http://localhost:8080/conciliation/listByCodConciliation/' + exercise.codConciliationHearing
        }).then(function success(response) {
            $scope.conciliation = response.data
            verifyButtons()
        }, function onError(response) {
            console.log(response);
        });

        $scope.sendConciliation = function(value){
            if(localStorage.getItem("codStudent") == "1"){
                //mandar o true do studentOneConciliation
                exercise.studentOneConciliation = value
            }
            if(localStorage.getItem("codStudent") == "2"){
                exercise.studentTwoConciliation = value
            }
            $http({
                method: 'POST',
                url: 'http://localhost:8080/exercise/updateConciliation',
                data: exercise
            }).then(function success(response) {
                console.log(response.data);
                if(response.data.responseMessage == "Salvo com sucesso"){
                    toastSucess()
                    verifyButtons()
                } else {
                    toastError()
                    verifyButtons()
                }
            }, function onError(response) {
                toastError()
                verifyButtons()
            });
        }

        function toastError(){
            if(localStorage.getItem("codStudent") == "1"){
                //mandar o true do studentOneConciliation
                exercise.studentOneConciliation = null
            }
            if(localStorage.getItem("codStudent") == "2"){
                exercise.studentOneConciliation = null
            }

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
    
        function toastSucess(){
            toastr.success('', 'Conciliação salva com sucesso', {
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

        function verifyButtons() {
            if(localStorage.getItem("codStudent") == "1" && exercise.studentOneConciliation != null){
                $scope.isDisabled = true;
            }
            if(localStorage.getItem("codStudent") == "2" && exercise.studentTwoConciliation != null){
                $scope.isDisabled = true;
            }
        }

    }
  
  })();