(function() {
	'use strict';

	angular
		.module('supermodular.wordpress')
		.factory('wordpressService', wordpressService);

	wordpressService.$inject = ['$http', '$q', '_', 'htmlToPlainText'];

	/* @ngInject */
	function wordpressService($http, $q, _, htmlToPlainText) {
		var url = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
		var articles = [];

		var service = {
			getArticles: getArticles,
			getArticle: getArticle
		};
		return service;

		////////////////

		function getArticles() {
			return $http.get(url)
				.then(function(response) {
					articles = [];
					_.each(response.data.posts, function(item) {
						var imageUrl = item.attachments.length > 0 ? item.attachments[0].images.full.url : null;
						var tags = [];
						_.each(item.tags, function(tag) {
							tags.push(tag.title);
						});

						var contentIndex = item.content.indexOf('</p>') + 4;
						var content = contentIndex === -1 ? item.content : item.content.substring(contentIndex);

						articles.push({
							id: item.id,
							title: item.title,
							brief: htmlToPlainText(item.excerpt),
							image: imageUrl,
							date: item.date,
							content: content,
							author: item.author.name,
							tags: tags,
							url: url
						});
					});
					return articles;
				});
		}

		function getArticle(articleId) {
			if (articles.length) {
				return $q.when(_.find(articles, 'id', articleId));
			} else {
				var deferred = $q.defer();

				getArticles()
					.then(function() {
						deferred.resolve(_.find(articles, 'id', articleId));
					});

				return deferred.promise;
			}
		}
	}
})();
