(function() {
	'use strict';

	angular
		.module('supermodular.native-scrolling', [
			'ionic',
			'supermodular.common'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.native-scrolling', {
					url: '/native-scrolling',
					views: {
						'menuContent': {
							templateUrl: 'scripts/native-scrolling/native-scrolling.html',
							controller: 'NativeScrollingController as vm'
						}
					}
				});
		});
})();
