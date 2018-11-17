(function () {
    'use strict';

    angular.module('BlurAdmin.pages.postCase')
        .controller('PostCaseCtrl', PostCaseCtrl);

    /** @ngInject */
    function PostCaseCtrl($scope, $http) {
        var codTeacher = localStorage.getItem("codTeacher");
        $http({
            method: 'GET',
            url: 'http://localhost:8080/team/allTeam/' + codTeacher
        }).then(function success(response) {
            $scope.classes = response.data
            console.log(response.data);
        }, function onError(response) {
            console.log(response.data);
        });

        $scope.saveCase = function (classes) {
            var request = [];
            angular.forEach(classes, function (value, key) {
                if (value.selected === true) {
                    var exercise = {
                        "codTeacher": value.codTeacher,
                        "codTeam": value.codTeam,
                        "caseDescription": classes.caseDescription
                    }
                    request.push(exercise);
                }
            })
            $http({
                method: 'POST',
                url: 'http://localhost:8080/exercise/create/',
                data: request
            }).then(function success(response) {
                $scope.classes = response.data
                console.log(response.data);
            }, function onError(response) {
                console.log(response.data);
            });
        }
    }

})();