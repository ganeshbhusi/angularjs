(function(){
	'use strict';
	angular.module("MyFirstApp",[])
	.controller("MyFirstContoller",function($scope){
		$scope.name="Ganesh Paul";
		$scope.myFunc=function(){
			return "This course is AngularJS";
		}
	});
})();