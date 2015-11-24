(function() {
	'use strict';

	angular
		.module('supermodular.wordpress')
		.controller('WordpressArticlesController', WordpressArticlesController);

	WordpressArticlesController.$inject = ['$state', 'wordpressService'];

	/* @ngInject */
	function WordpressArticlesController($state, wordpressService) {
		var vm = angular.extend(this, {
			articles: [],
			navigate: navigate
		});

		function activate() {
			getArticles();
		}
		activate();

		// ********************************************************************

		function getArticles() {
			wordpressService.getArticles()
				.then(function(articles) {
					vm.articles = articles;
				});
		}

		function navigate(articleId) {
			$state.go('app.wordpress-article', { articleId: articleId });
		}
	}
})();
