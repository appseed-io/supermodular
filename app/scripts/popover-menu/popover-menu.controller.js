(function() {
	'use strict';

	angular
		.module('supermodular.popover-menu')
		.controller('PopoverMenuController', PopoverMenuController);

	PopoverMenuController.$inject = ['popoverViewService'];

	/* @ngInject */
	function PopoverMenuController(popoverViewService) {
		var vm = angular.extend(this, {
			showPopover: showPopover
		});

		(function activate() {
		})();

		// ********************************************************************

		function showPopover(event) {
			popoverViewService.show(event).then(function(option) {
				alert('You have selected option \'' + option + '\'');
			});
		}
	}
})();
