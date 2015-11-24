(function() {
	'use strict';

	angular
		.module('starter')
		.config(function($httpProvider) {
			$httpProvider.interceptors.push(function($cordovaNetwork, $q, $rootScope, $injector) {
				return {
					request: function(config) {
						if (!ionic.Platform.isReady) {
							return config;
						}

						if (config.url.indexOf('http') !== 0) {
							return config;
						}

						var isOnline = getNetworkStatus();

						if (isOnline) {
							return config;
						}

						var $ionicPopup = $injector.get('$ionicPopup');
						var alertPopup = $ionicPopup.alert({
							title: 'Alert',
							template: 'There is no internet connection'
						});

						return $q.reject('No internet connection');
					},
					response: function(response) {
						return response;
					}
				};

				function getNetworkStatus() {
					var isPluginAvailable = !!navigator.connection;

					if (isPluginAvailable) {
						return $cordovaNetwork.isOnline();
					}

					return navigator.onLine;
				}
			});
		});
})();