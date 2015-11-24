(function() {
	'use strict';

	angular
		.module('supermodular.wordpress')
		.controller('WordpressArticleController', WordpressArticleController);

	WordpressArticleController.$inject = [
		'$stateParams', '$ionicActionSheet', '$cordovaSocialSharing', 'wordpressService'];

	/* @ngInject */
	function WordpressArticleController($stateParams, $ionicActionSheet, $cordovaSocialSharing, wordpressService) {
		var articleId = parseInt($stateParams.articleId, 10);

		var vm = angular.extend(this, {
			article: null,
			share: share
		});

		function activate() {
			loadArticle();
		}
		activate();

		// ********************************************************************

		function share() {
			$ionicActionSheet.show({
				buttons: [
					{ text: 'Facebook' },
					{ text: 'Twitter' },
					{ text: 'Email' },
					{ text: 'Share' }
				],
				titleText: 'Share',
				cancelText: 'Cancel',
				buttonClicked: function(index) {
					switch(index) {
						case 0:
							shareToFacebook();
							break;
						case 1:
							shareToTwitter();
							break;
						case 2:
							shareViaEmail();
							break;
						case 3:
							shareNative();
							break;
					}
					return true;
				}
			});
		}

		function shareNative() {
			var message = vm.article.title;
			var subject = vm.article.title;

			$cordovaSocialSharing
				.share(message, subject, null, vm.article.url);
		}

		function shareToFacebook() {
			var message = vm.article.title;
			var image = vm.article.image;
			var link = vm.article.url;

			$cordovaSocialSharing
				.shareViaFacebook(message, image, link);
		}

		function shareToTwitter() {
			var message = vm.article.title + ' ' + vm.article.url;
			var image = vm.article.image;
			var link = vm.article.url;

			$cordovaSocialSharing
				.shareViaTwitter(message, image, link);
		}

		function shareViaEmail() {
			var message = 'Read more about "' + vm.article.title + '" ' + vm.article.url;
			var subject = vm.article.title;

			$cordovaSocialSharing
				.shareViaEmail(message, subject, [], [], [], null);
		}

		function loadArticle() {
			wordpressService.getArticle(articleId)
				.then(function(article) {
					vm.article = article;
				});
		}
	}
})();
