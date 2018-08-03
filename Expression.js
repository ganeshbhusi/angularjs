(function(){
	angular.module("MsgApp",[])
	.controller("MsgController",MsgController);
	MsgController.$inject=['$scope'];
	function MsgController($scope){
		//$scope.name="Ganesh";
		$scope.name = function(){
			return "Ganesh";
		};
	}
})();