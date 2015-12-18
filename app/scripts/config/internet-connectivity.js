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

					// On Android and when only the 3G interface is on
					// the return connection type is `unknown` even the device is online.
					// To work around this we will assume that only Connection.NONE
					// is declaring an offline device. Which is returned when data are
					// disabled.

					var isPluginAvailable = !!navigator.connection;

					if (isPluginAvailable) {
							var networkState = JSON.stringify(navigator.connection); //.type
							console.log('Internet connectivity chech. NetworkState: ' + networkState);

							// HACK: this is a temporary hack due to Android 3G related issue
							//       described above.
							if (navigator.connection.type.toLowerCase() == 'unknown'){
								return true;
							}else {
								return $cordovaNetwork.isOnline();
							}
					}

					return navigator.onLine;
				}
			});
		});
})();
