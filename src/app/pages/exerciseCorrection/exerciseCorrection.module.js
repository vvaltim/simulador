/**
 * @author vvaltim
 * created on 17.09.2018
 */
(function () {
	'use strict';

	angular.module('BlurAdmin.pages.exerciseCorrection', ['ui.select', 'ngSanitize'])
		.config(routeConfig);

	/** @ngInject */
	function routeConfig($stateProvider) {
		$stateProvider
			.state('listExercise', {
				url: '/exerciseCorrection/listExercise',
				templateUrl: 'app/pages/exerciseCorrection/listExercise/list-exercise.html',
				controller: 'ListCorrectionExerciseCtrl',
				title: 'Corrigir Exercícios',
				sidebarMeta: {
					icon: 'fas fa fa-bank',
					order: 0,
				}
			})
			.state('correctionExercise', {
				url: '/exerciseCorrection/correctionExercise',
				templateUrl: 'app/pages/exerciseCorrection/correctionExercise/correction-exercise.html',
				controller: 'CorrectionExerciseCtrl',
				title: 'Corrigir Exercício',
				params: {
					"item": {
					}
				}
			});
	}
})();