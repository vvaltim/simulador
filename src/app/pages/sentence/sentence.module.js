/**
 * @author vvaltim
 * created on 17.09.2018
 */
(function () {
	'use strict';

	angular.module('BlurAdmin.pages.sentence', ['ui.select', 'ngSanitize'])
		.config(routeConfig);

	/** @ngInject */
	function routeConfig($stateProvider) {
		$stateProvider
			.state('sentence', {
				url: '/sentence',
				templateUrl: 'app/pages/sentence/sentence.html',
				title: 'Sentença',
				controller: 'SentenceCtrl',
				params: {
					"item": {
					}
				}
			});
	}
})();