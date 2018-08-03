(function(){
	angular.module("MsgApp",[])
	.controller("MsgController",MsgController);
	MsgController.$inject=['$scope'];
	//$scope.img_name="gani";
	function MsgController($scope){
		$scope.img_name="gani";

		$scope.changeImage=function(){
			$scope.img_name="ganesh";
		};
	}
})();