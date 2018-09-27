/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.exerciseCorrection')
        .controller('ListExerciseCtrl', ListExerciseCtrl);

    /** @ngInject */
    function ListExerciseCtrl($scope, $filter, $state, editableOptions, editableThemes) {

        $scope.smartTablePageSize = 20;

        $scope.smartTableData = [
            {
                id: 1,
                firstName: 'Aluno 1',
                lastName: '6 Período, Turma 3',
                username: '23/09/2018',
                email: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien nulla, luctus non justo eu, dignissim vestibulum neque. Curabitur lectus nisi, consectetur sodales dui ut, aliquet sagittis odio. Nam sit amet feugiat enim. Donec placerat elit id risus viverra, sed cursus ligula maximus. Praesent pharetra faucibus porta. Ut pretium lorem velit, non ornare magna varius at. Phasellus vel sem laoreet, interdum est sed, vulputate orci.',
                age: 'ion-close'
            },
            {
                id: 2,
                firstName: 'Aluno 2',
                lastName: '6 Período, Turma 3',
                username: '23/09/2018',
                email: 'Vestibulum luctus lectus ut libero pretium egestas. Nullam eu ligula id dui eleifend vehicula sit amet sit amet metus. Nulla vehicula ligula a neque feugiat gravida. Aenean lacinia imperdiet rhoncus. Nullam vulputate eget nulla vel aliquam. Sed sit amet odio diam. Integer sagittis dolor sed condimentum convallis. Praesent magna odio, aliquam at nulla non, fermentum tincidunt massa. Phasellus dignissim eu sem tempor sagittis. Mauris mi libero, luctus ac nibh nec, accumsan aliquam ante. Etiam magna nulla, vulputate id ex vitae, dictum faucibus turpis. Aliquam dignissim sem et aliquet aliquam. Ut tortor metus, commodo eleifend felis in, tempor tempus dolor. Curabitur maximus, lorem ullamcorper pulvinar congue, sem odio vestibulum erat, et tincidunt quam eros vitae justo. Vestibulum interdum quis ex vitae sodales.',
                age: 'ion-checkmark'
            },
            {
                id: 3,
                firstName: 'Aluno 1',
                lastName: '6 Período, Turma 2',
                username: '28/09/2018',
                email: 'Vestibulum magna augue, pharetra id eleifend eget, condimentum ac leo. Vivamus ultrices neque scelerisque luctus porttitor. Ut et urna magna. Integer auctor pulvinar diam, bibendum pellentesque ex ornare et. Aliquam nec hendrerit nibh, ac pharetra nisl. Proin cursus dui a turpis commodo, viverra cursus libero facilisis. Aliquam nisi felis, commodo a tristique vel, interdum eu felis.',
                age: 'ion-checkmark'
            },
            {
                id: 4,
                firstName: 'Aluno 2',
                lastName: '6 Período, Turma 2',
                username: '27/09/2018',
                email: 'Aliquam vitae tortor urna. Quisque cursus purus sit amet urna consequat, et malesuada dui tempus. Fusce feugiat mauris arcu. Sed mi dui, pretium a suscipit vitae, efficitur sed nisl. Fusce vitae orci in urna dapibus faucibus id sit amet quam. Vestibulum quis fringilla ipsum. Vestibulum tempus finibus ante, a facilisis est lacinia quis. Pellentesque ultricies est ac consectetur varius. Vestibulum ultrices risus sapien, non eleifend dolor consequat eu. Ut dictum ligula at imperdiet sollicitudin. Quisque a lectus eget nisl laoreet tristique. Etiam diam ante, facilisis consectetur blandit a, pharetra a purus. Duis nec libero nulla. Fusce sollicitudin nisi mi, et blandit velit placerat eget.',
                age: 'ion-close'
            }
        ];

        $scope.editableTableData = $scope.smartTableData.slice(0, 36);

        $scope.peopleTableData = [
            {
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
                status: 'info'
            },
            {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
                status: 'primary'
            },
            {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
                status: 'success'
            },
            {
                id: 4,
                firstName: 'John',
                lastName: 'Snow',
                username: '@snow',
                email: 'snow@gmail.com',
                age: '20',
                status: 'danger'
            },
            {
                id: 5,
                firstName: 'Jack',
                lastName: 'Sparrow',
                username: '@jack',
                email: 'jack@yandex.ru',
                age: '30',
                status: 'warning'
            }
        ];

        $scope.metricsTableData = [
            {
                image: 'app/browsers/chrome.svg',
                browser: 'Google Chrome',
                visits: '10,392',
                isVisitsUp: true,
                purchases: '4,214',
                isPurchasesUp: true,
                percent: '45%',
                isPercentUp: true
            },
            {
                image: 'app/browsers/firefox.svg',
                browser: 'Mozilla Firefox',
                visits: '7,873',
                isVisitsUp: true,
                purchases: '3,031',
                isPurchasesUp: false,
                percent: '28%',
                isPercentUp: true
            },
            {
                image: 'app/browsers/ie.svg',
                browser: 'Internet Explorer',
                visits: '5,890',
                isVisitsUp: false,
                purchases: '2,102',
                isPurchasesUp: false,
                percent: '17%',
                isPercentUp: false
            },
            {
                image: 'app/browsers/safari.svg',
                browser: 'Safari',
                visits: '4,001',
                isVisitsUp: false,
                purchases: '1,001',
                isPurchasesUp: false,
                percent: '14%',
                isPercentUp: true
            },
            {
                image: 'app/browsers/opera.svg',
                browser: 'Opera',
                visits: '1,833',
                isVisitsUp: true,
                purchases: '83',
                isPurchasesUp: true,
                percent: '5%',
                isPercentUp: false
            }
        ];

        $scope.users = [
            {
                "id": 1,
                "name": "Esther Vang",
                "status": 4,
                "group": 3
            },
            {
                "id": 2,
                "name": "Leah Freeman",
                "status": 3,
                "group": 1
            },
            {
                "id": 3,
                "name": "Mathews Simpson",
                "status": 3,
                "group": 2
            },
            {
                "id": 4,
                "name": "Buckley Hopkins",
                "group": 4
            },
            {
                "id": 5,
                "name": "Buckley Schwartz",
                "status": 1,
                "group": 1
            },
            {
                "id": 6,
                "name": "Mathews Hopkins",
                "status": 4,
                "group": 2
            },
            {
                "id": 7,
                "name": "Leah Vang",
                "status": 4,
                "group": 1
            },
            {
                "id": 8,
                "name": "Vang Schwartz",
                "status": 4,
                "group": 2
            },
            {
                "id": 9,
                "name": "Hopkin Esther",
                "status": 1,
                "group": 2
            },
            {
                "id": 10,
                "name": "Mathews Schwartz",
                "status": 1,
                "group": 3
            }
        ];

        $scope.statuses = [
            { value: 1, text: 'Good' },
            { value: 2, text: 'Awesome' },
            { value: 3, text: 'Excellent' },
        ];

        $scope.groups = [
            { id: 1, text: 'user' },
            { id: 2, text: 'customer' },
            { id: 3, text: 'vip' },
            { id: 4, text: 'admin' }
        ];

        $scope.showGroup = function (user) {
            if (user.group && $scope.groups.length) {
                var selected = $filter('filter')($scope.groups, { id: user.group });
                return selected.length ? selected[0].text : 'Not set';
            } else return 'Not set'
        };

        $scope.showStatus = function (user) {
            var selected = [];
            if (user.status) {
                selected = $filter('filter')($scope.statuses, { value: user.status });
            }
            return selected.length ? selected[0].text : 'Not set';
        };


        $scope.removeUser = function (index) {
            $scope.users.splice(index, 1);
        };

        $scope.addUser = function () {
            $scope.inserted = {
                id: $scope.users.length + 1,
                name: '',
                status: null,
                group: null
            };
            $scope.users.push($scope.inserted);
        };

        editableOptions.theme = 'bs3';
        editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
        editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';

        $scope.openExercise = function (item) {
            console.log("Item Clicado", item);
            $state.go('contestation', { "item": item });
        }

    }

})();
