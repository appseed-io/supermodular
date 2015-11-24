(function() {
	'use strict';

	angular
		.module('supermodular.home', [
			'ionic',
			'ngCordova',
			'supermodular.common'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.home', {
					url: '/home',
					views: {
						'menuContent': {
							templateUrl: 'scripts/home/home.html',
							controller: 'HomeController as vm'
						}
					}
				});
		});
})();
