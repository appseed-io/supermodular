(function() {
	'use strict';

	angular
		.module('supermodular.home')
		.factory('menuItems', menuItems);

	menuItems.$inject = [];

	/* @ngInject */
	function menuItems() {
		var data = [{
			title: 'PopOver menu',
			path: 'popover-menu',
			icon: 'ion-speakerphone'
		}, {
			title: 'Wordpress',
			path: 'wordpress-articles',
			icon: 'ion-android-cart'
		}, {
			title: 'Elements',
			path: 'elements',
			icon: 'ion-images'
		}];

		return data;
	}
})();
