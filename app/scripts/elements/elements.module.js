(function() {
	'use strict';

	angular
		.module('supermodular.elements', [
			'ionic',
			'ngCordova'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.elements', {
					url: '/elements',
					views: {
						'menuContent': {
							templateUrl: 'scripts/elements/elements.html',
							controller: 'ElementsController as vm'
						}
					}
				})
				.state('app.elements-form-placeholder-labels', {
					url: '/elements-form-placeholder-labels',
					views: {
						'menuContent': {
							templateUrl: 'scripts/elements/form-placeholder-labels.html'
						}
					}
				})
				.state('app.elements-form-inline-labels', {
					url: '/elements-form-inline-labels',
					views: {
						'menuContent': {
							templateUrl: 'scripts/elements/form-inline-labels.html'
						}
					}
				})
				.state('app.elements-form-stacked-labels', {
					url: '/elements-form-stacked-labels',
					views: {
						'menuContent': {
							templateUrl: 'scripts/elements/form-stacked-labels.html'
						}
					}
				})
				.state('app.elements-form-floating-labels', {
					url: '/elements-form-floating-labels',
					views: {
						'menuContent': {
							templateUrl: 'scripts/elements/form-floating-labels.html'
						}
					}
				})
				.state('app.elements-form-inset-form', {
					url: '/elements-form-inset-form',
					views: {
						'menuContent': {
							templateUrl: 'scripts/elements/form-inset-form.html'
						}
					}
				})
				.state('app.elements-form-inset-inputs', {
					url: '/elements-form-inset-inputs',
					views: {
						'menuContent': {
							templateUrl: 'scripts/elements/form-inset-inputs.html'
						}
					}
				})
				.state('app.elements-form-input-icons', {
					url: '/elements-form-input-icons',
					views: {
						'menuContent': {
							templateUrl: 'scripts/elements/form-input-icons.html'
						}
					}
				})
				.state('app.elements-toggle', {
					url: '/elements-toggle',
					views: {
						'menuContent': {
							templateUrl: 'scripts/elements/toggle.html'
						}
					}
				})
				.state('app.elements-checkbox', {
					url: '/elements-checkbox',
					views: {
						'menuContent': {
							templateUrl: 'scripts/elements/checkbox.html'
						}
					}
				})
				.state('app.elements-radiobuttons', {
					url: '/elements-radiobuttons',
					views: {
						'menuContent': {
							templateUrl: 'scripts/elements/radiobuttons.html'
						}
					}
				})
				.state('app.elements-range', {
					url: '/elements-range',
					views: {
						'menuContent': {
							templateUrl: 'scripts/elements/range.html'
						}
					}
				})
				.state('app.elements-select', {
					url: '/elements-select',
					views: {
						'menuContent': {
							templateUrl: 'scripts/elements/select.html'
						}
					}
				})
				.state('app.elements-tabs-icononly', {
					url: '/elements-tabs-icononly',
					views: {
						'menuContent': {
							templateUrl: 'scripts/elements/tabs-icononly.html'
						}
					}
				})
				.state('app.elements-tabs-topicon', {
					url: '/elements-tabs-topicon',
					views: {
						'menuContent': {
							templateUrl: 'scripts/elements/tabs-topicon.html'
						}
					}
				})
				.state('app.elements-tabs-lefticon', {
					url: '/elements-tabs-lefticon',
					views: {
						'menuContent': {
							templateUrl: 'scripts/elements/tabs-lefticon.html'
						}
					}
				})
				.state('app.elements-tabs-striped', {
					url: '/elements-tabs-striped',
					views: {
						'menuContent': {
							templateUrl: 'scripts/elements/tabs-striped.html'
						}
					}
				});
		});
})();
