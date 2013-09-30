var myAppModule = angular.module('myApp',[]);

function TextController($scope){
	var someText = {}
	someText.message='You have started your journey.';
	
	$scope.someText = someText;

}