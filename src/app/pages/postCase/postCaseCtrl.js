(function () {
    'use strict';

    angular.module('BlurAdmin.pages.postCase')
        .controller('PostCaseCtrl', PostCaseCtrl);

    /** @ngInject */
    function PostCaseCtrl($scope, $http, toastr) {
        //pegando todas as turmas do usuário logado
        $http({
            method: 'GET',
            url: 'http://localhost:8080/team/allTeam/' + localStorage.getItem("codTeacher")
        }).then(function success(response) {
            $scope.classes = response.data
            console.log(response.data);
        }, function onError(response) {
            console.log(response.data);
        });

        //salvando o caso com as turmas
        $scope.saveCase = function (classes) {
            var request = [];
            angular.forEach(classes, function (value, key) {
                if (value.selected === true) {
                    var exercise = {
                        "codTeacher": value.codTeacher,
                        "codTeam": value.codTeam,
                        "caseDescription": classes.caseDescription,
                        "status": 1
                    }
                    request.push(exercise);
                }
            })
            console.log(request);
            $http({
                method: 'POST',
                url: 'http://localhost:8080/exercise/create/',
                data: request
            }).then(function success(response) {
                //feedback visual de sucesso
                toastr.success('', 'Caso postado com sucesso', {
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

                $scope.classes.caseDescription = "";                  

            }, function onError(response) {

                //feedback visual de erro
                toastr.error('', 'Não foi possível enviar o caso.', {
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
                  })

            });
        }
    }

})();