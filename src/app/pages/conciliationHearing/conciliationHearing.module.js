/**
 * @author vvaltim
 * created on 17.09.2018
 */
(function () {
	'use strict';

	angular.module('BlurAdmin.pages.conciliationHearing', ['ui.select', 'ngSanitize'])
		.config(routeConfig);

	/** @ngInject */
	function routeConfig($stateProvider) {
		$stateProvider
			.state('conciliationHearing', {
				url: '/conciliationHearing',
				templateUrl: 'app/pages/conciliationHearing/conciliationHearing/conciliation-hearing.html',
				title: 'Aud. de conciliação',
				controller: 'ConciliationHearingCtrl',
				params: {
					"item": {
					}
				}
			})
			.state('conciliationHearingConfirm', {
				url: '/conciliationHearingConfirm',
				templateUrl: 'app/pages/conciliationHearing/conciliationHearingConfirm/conciliation-hearing-confirm.html',
				title: 'Aud. de conciliação',
				controller: 'ConciliationHearingConfirmCtrl',
				params: {
					"item": {
					}
				}
			});
	}
})();