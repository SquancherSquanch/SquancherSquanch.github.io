'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/index.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$window', function($scope, $window) {
	$scope.items = {'1': 'one',
					'2': 'two',
					'3': 'three',
					'4': 'four',
					};

	$scope.goTo = function (url) {
		var location = '#/' + url;
		window.location = location;
	};

}]);