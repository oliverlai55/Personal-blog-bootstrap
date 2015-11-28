var myApp = angular.module('myApp', ['ngRoute']);

	myApp.config(function($routeProvider, $locationProvider){
		$routeProvider.when('/',{
			templateUrl: 'index.html',
			controller: 'mainController'
		})
		when('/about.html',{
			templateUrl: 'about.html',
			controller: 'mainController'
		})
		when('/contact.html',{
			templateUrl: 'contact.html',
			controller: 'mainController'
		})
		otherwise({
			redirectTo: '/'
		});
	});

myApp.controller('mainController', function ($scope, $location){

	$scope.aboutPage = function(){
		$location.path('about.html')
	}

	$scope.homePage = function(){
		$location.path('index.html')
	}

	$scope.contactPage = function(){
		$location.path('contact.html')
	}
});