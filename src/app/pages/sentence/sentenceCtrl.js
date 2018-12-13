/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.sentence')
        .controller('SentenceCtrl', SentenceCtrl);

    /** @ngInject */
    function SentenceCtrl($scope, $http, $stateParams, toastr) {
        var exercise = $stateParams.item

        $scope.salvar = function(verdict){
            exercise.veredict = verdict;
            exercise.status = 99;
            console.log(exercise);

            $http({
                method: 'POST',
                url: 'http://localhost:8080/exercise/update',
                data: exercise
            }).then(function success(response) {
                console.log(response.data);
                if(response.data.responseMessage == "Salvo com sucesso"){
                    toastr.success('', 'Sentença salva com sucesso', {
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
                    toastr.error('', 'Não foi possível enviar a Sentença.', {
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
                toastr.error('', 'Não foi possível enviar a Sentença.', {
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
