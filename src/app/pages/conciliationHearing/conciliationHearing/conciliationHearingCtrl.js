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
                if(response.data.codConciliationHearing != null){
                    //conciliationHearing criada com sucesso, agora só associar ela ao exercicio e alterar o status
                    exercise.codConciliationHearing = response.data.codConciliationHearing
                    
                    //se tiver com o status 2, e a primeira audiencia
                    if(exercise.status == 2){
                        exercise.status = 4
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

                        //se tiver com o status 6, e a segunda audiencia
                    } else if(exercise.status == 6){
                        exercise.status = 7
                        exercise.studentOneConciliation = null
                        exercise.studentTwoConciliation = null
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
                    
                } else {
                    toastError()
                }
            }, function onError(response) {
                toastError()
            });
        }

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
    
        function toastSucess(){
            toastr.success('', 'Audiencia de conciliação salva com sucesso', {
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