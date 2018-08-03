(function(){
	'use strict';
	angular.module("MySecondApp",[]).
	controller("DIContoller",DIContoller);
	function DIContoller($scope, $filter, $injector){
		$scope.name="ganesh";

		$scope.upper =function(){
			var uCase = $filter('uppercase');
			$scope.name = uCase($scope.name);
		}
		console.log($injector.annotate(DIContoller));
	}
})();