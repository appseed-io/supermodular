(function() {
	'use strict';

	angular
		.module('supermodular.native-scrolling')
		.controller('NativeScrollingController', NativeScrollingController);

	NativeScrollingController.$inject = ['nativeScrollingService'];

	/* @ngInject */
	function NativeScrollingController(nativeScrollingService) {
		var vm = angular.extend(this, {
			items: []
		});

		(function activate() {
			getItems();
		})();

		// ********************************************************************

		function getItems() {
			nativeScrollingService.getItems(200)
				.then(function(items) {
					vm.items = items;
				});
		}
	}
})();
