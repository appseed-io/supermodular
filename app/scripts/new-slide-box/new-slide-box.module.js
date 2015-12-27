(function() {
	'use strict';

	angular
		.module('supermodular.new-slide-box', [
			'ionic',
			'supermodular.common'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.new-slide-box', {
					url: '/new-slide-box',
					views: {
						'menuContent': {
							templateUrl: 'scripts/new-slide-box/new-slide-box.html',
							controller: 'NewSlideBoxController as vm'
						}
					}
				});
		});
})();
