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
				//
				// Local stored images
				//
				// items.push({
				// 	image: 'images/cards/face-' + i + '.jpg'
				// });
				//
				// Online images
				//
				items.push({
					image: 'http://lorempixel.com/786/1024/nightlife/' + i + '/'
				});
			}
			return items;
		}
	}
})();
