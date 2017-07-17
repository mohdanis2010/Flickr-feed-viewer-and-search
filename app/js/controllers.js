'use strict';

var flickrFeedApp = angular.module('flickrFeedApp');

flickrFeedApp.controller('Navbar',
	function ($scope, $location, FeedNewTagger) {
		$scope.tag = FeedNewTagger;
		
	});

flickrFeedApp.controller('FeedListCtrl',
	function ($scope, $http, $routeParams, $location, FeedNewTagger) {
		$scope.tag = FeedNewTagger;
		$scope.loader = true;
		$scope.feedlist = false;
		$scope.tag.text = $routeParams.tag;
		$scope.$watch('tag.text', function()
			{
				$scope.loader = true;
				$scope.feedlist = false;
				var newTag = $scope.tag.text;
				$http.jsonp('http://api.flickr.com/services/feeds/photos_public.gne?tags=' + $scope.tag.text + '&tagmode=all&format=json&jsoncallback=JSON_CALLBACK').success(function(data) {
					if ($scope.tag.text === newTag) {
						$scope.loader = false;
						$scope.feed = data;
						if ($scope.feed.items.length === 0) {
							$scope.feedlist = true;
						}
						
						if ($scope.tag.text !== ""){
							$location.path("/feed/" + $scope.tag.text);
						}
					}
				});
			});	
	});

