/**
 * @author vvaltim
 * created on 13.12.2018
 */
(function () {
	'use strict';

	angular.module('BlurAdmin.pages.allCase', ['ui.select', 'ngSanitize'])
		.config(routeConfig);

	/** @ngInject */
	function routeConfig($stateProvider) {
		$stateProvider
			.state('allCase', {
				url: '/allCase',
				templateUrl: 'app/pages/allCase/all-case.html',
				title: 'Detalhes do caso',
				controller: 'AllCaseCtrl',
				params: {
					"item": {
					}
				}
			});
	}
})();