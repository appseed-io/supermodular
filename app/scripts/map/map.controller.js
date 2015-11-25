(function() {
	'use strict';

	angular
		.module('supermodular.map')
		.controller('MapController', MapController);

	MapController.$inject = ['$scope', 'mapService'];

	/* @ngInject */
	function MapController($scope, mapService) {
		var vm = angular.extend(this, {
			origin: {
				lat: mapService.origin.latitude,
				lon: mapService.origin.longitude
			},
			zoom: mapService.zoomLevel,
			markers: []
		});

		var markers = [];
		for (var i = 0; i < mapService.annotations.length; i++) {
			var annotation = mapService.annotations[i];
			markers.push({
				name: annotation.title,
				lat: annotation.latitude,
				lon: annotation.longitude
			});
		}
		vm.markers = markers;
	}
})();
