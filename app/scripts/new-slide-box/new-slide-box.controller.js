(function() {
	'use strict';

	angular
		.module('supermodular.new-slide-box')
		.controller('NewSlideBoxController', NewSlideBoxController);

	NewSlideBoxController.$inject = [];

	/* @ngInject */
	function NewSlideBoxController() {
		var vm = angular.extend(this, {
			items: getItems(),
			options: {
				loop: true
			}
		});

		// ********************************************************************

		function getItems() {
			var items = [];
			for (var i = 1;i <= 7;i++) {
				items.push({
					image: 'images/cards/face-' + i + '.jpg' 
				});
			}
			return items;
		}
	}
})();
