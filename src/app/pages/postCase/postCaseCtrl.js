(function () {
    'use strict';

    angular.module('BlurAdmin.pages.postCase')
        .controller('PostCaseCtrl', PostCaseCtrl);

    /** @ngInject */
    function PostCaseCtrl($scope) {
        $scope.classes = [{
            id: 1,
            name: "Turma Direito 01"
        },
        {
            id: 2,
            name: "Turma Direito 02"
        }]
    }

})();