'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl: 'home/index.html',
    controller: 'homeCrtl'
  })
  //$routeProvider.otherwise({redirectTo: ''});
}]);


app.controller('homeCrtl', ['$scope', '$window', function($scope, $window) {
	
}]);

app.controller('headerCrtl', ['$scope', '$window', function($scope, $window) {
	$scope.goTo = function (url) {
		var location = '#/';
		if (url === 'home'){
			//console.log();
			return window.location = '/';
		}
		return window.location = location + url;
	};
}]);

app.controller('sliderCrtl', function($scope) {
    $scope.images=[{src:'ss1.jpg',title:'Pic 1'},{src:'ss2.jpg',title:'Pic 2'},{src:'ss3.jpg',title:'Pic 3'},{src:'ss4.png',title:'Pic 4'}]; 
});
 
app.directive('slider', function ($timeout) {
  return {
    restrict: 'AE',
	replace: true,
	scope:{
		images: '='
	},
    link: function (scope, elem, attrs) {
	
		scope.currentIndex=0;

		scope.next=function(){
			scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0;
			$timeout.cancel(timer);
			timer=$timeout(sliderFunc,5000);
		};
		
		scope.prev=function(){
			scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.images.length-1;
		};
		
		scope.$watch('currentIndex',function(){
			scope.images.forEach(function(image){
				image.visible=false;
			});
			scope.images[scope.currentIndex].visible=true;
		});
		
		/* Start: For Automatic slideshow*/
		
		var timer;
		
		var sliderFunc=function(){
			timer=$timeout(function(){
				scope.next();
				timer=$timeout(sliderFunc,5000);
			},5000);
		};
		
		sliderFunc();
		
		scope.$on('$destroy',function(){
			$timeout.cancel(timer);
		});
		
		/* End : For Automatic slideshow*/
		
    },
	templateUrl:'templates/templateurl.html'
  }
});