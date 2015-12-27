(function() {
	'use strict';

	angular
		.module('supermodular.native-scrolling')
		.factory('nativeScrollingService', nativeScrollingService);

	nativeScrollingService.$inject = ['$q'];

	/* @ngInject */
	function nativeScrollingService($q) {
		var service = {
			getItems: getItems
		};
		return service;

		// *************************************************************************

		function getItems(numberOfItems) {
			var items = [];
			for (var i = 0;i < numberOfItems;i++) {
				items.push('Item #' + (i + 1));
			}
			return $q.when(items);
		}
	}
})();
