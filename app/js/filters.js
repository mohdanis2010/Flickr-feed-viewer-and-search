'use strict';

var flickrfeedFilters = angular.module('flickrFeedApp');


flickrfeedFilters.filter('handleUntitled', function() {
		return function(input) {
			return input.trim() === "" ? "Untitled" : input;
		};
});

