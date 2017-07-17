'use strict';

var flickrFeedApp = angular.module('flickrFeedApp', [
  'ngRoute'
]);

flickrFeedApp.factory('FeedNewTagger', function(){
  return {text:''};
});

flickrFeedApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/feed/:tag', {
        templateUrl: 'templates/feed.html',
        controller: 'FeedListCtrl'
      }).
      
      otherwise({
        redirectTo: '/feed/sea'
      });
  }]);