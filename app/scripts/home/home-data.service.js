(function() {
	'use strict';

	angular
		.module('supermodular.home')
		.factory('homeDataService', homeDataService);

	homeDataService.$inject = [];

	/* @ngInject */
	function homeDataService() {
		return {
			phoneNumber: '+306973216110',
			email: 'skounis@gmail.com',
			officeLocation: '37.7736854,-122.421034',
			facebookPage: 'https://www.facebook.com/ionicframework'
		};
	}
})();
