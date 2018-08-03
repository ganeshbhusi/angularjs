(function(){
	'use strict';
	angular.module("MySecondApp",[]).
	controller("DIContoller",DIContoller);

DIContoller.$inject = ['$scope','$filter'];

	function DIContoller($scope, $filter){
		$scope.name="ganesh";

		$scope.upper =function(){
			var uCase = $filter('uppercase');
			$scope.name = uCase($scope.name);
		}
	}
})();

//!function(){"use strict";function e(e,n){e.name="ganesh",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}angular.module("MySecondApp",[]).controller("DIContoller",e),e.$inject=["$scope","$filter"]}();