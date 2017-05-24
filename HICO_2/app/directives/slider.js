var app = angular.module('myApp', []);

app.directive('slider', function($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      images: '='
    },
    link: function(scope, elem, attrs) {},
    templateUrl: 'templates/templateurl.html',
    scope.currentIndex = 0; // Initially the index is at the first image

	scope.next = function() {
	  scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
	};

	scope.prev = function() {
	  scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
	};
  };
});