(function(){
	angular.module("LunchCheck",[])
	.controller("LunchCheckController",LunchCheckController);

	LunchCheckController.$inject=['$scope'];

	function LunchCheckController($scope){
		$scope.lunch="";
		
		$scope.checkNow=function(){
			var str=$scope.lunch;
			var arr=str.split(",");
			if($scope.lunch.trim().length === 0){
				$scope.message2="";
				$scope.message1="Please enter data first";
			}
			else if(arr.length>0 && arr.length<=3){
				$scope.message1="";
				$scope.message2="Enjoy!";
			}
			else if(arr.length>3){
				$scope.message1="";
				$scope.message2="Too much!";
			}
			
		}
	}
})();