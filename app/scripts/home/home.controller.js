(function() {
	'use strict';

	angular
		.module('supermodular.home')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['menuItems', 'homeDataService', 'externalAppsService', '$cordovaEmailComposer', '$cordovaAppRate'];

	/* @ngInject */
	function HomeController(menuItems, homeDataService, externalAppsService, $cordovaEmailComposer, $cordovaAppRate) {
		var vm = angular.extend(this, {
			entries: menuItems,
			phoneNumber: homeDataService.phoneNumber,
			getDirections: getDirections,
			sendEmail: sendEmail,
			openFacebookPage: openFacebookPage,
			rateThisAppNow: rateThisAppNow
		});

		function getDirections() {
			externalAppsService.openMapsApp(homeDataService.officeLocation);
		}

		function sendEmail() {
			$cordovaEmailComposer.isAvailable().then(function() {
				var email = {
					to: homeDataService.email,
					subject: 'Cordova Icons',
					body: 'How are you? Nice greetings from Leipzig'
				};

				$cordovaEmailComposer.open(email);
			});
		}

		function openFacebookPage() {
			externalAppsService.openExternalUrl(homeDataService.facebookPage);
		}

		function rateThisAppNow(){
			$cordovaAppRate.promptForRating(true);
		}
	}
})();
