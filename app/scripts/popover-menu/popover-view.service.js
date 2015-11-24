(function() {
	'use strict';

	angular
		.module('supermodular.popover-menu')
		.factory('popoverViewService', popoverViewService);

	popoverViewService.$inject = ['$rootScope', '$ionicPopover', '$q'];

	/* @ngInject */
	function popoverViewService($rootScope, $ionicPopover, $q) {
		var scope = createPopover();
		var service = {
			show: show
		};
		return service;

		// ***************************************************

		function show(event) {
			var defer = $q.defer();

			scope.select = function(option) {
				defer.resolve(option);
				scope.popover.hide();
			}

			scope.popover.show(event);
			return defer.promise;
		}

		function createPopover() {
			var scope = $rootScope.$new();
			scope.options = ['Red', 'Green', 'Blue', 'White'];

			$ionicPopover.fromTemplateUrl('scripts/popover-menu/popover-view.html', {
				scope: scope
			}).then(function(popover) {
				scope.popover = popover;
			});

			return scope;
		}
	}
})();
