(function(){
	'use strict';
	angular.module("nameCalc",[])
	.controller("nameCalcCtrl",function($scope){
		$scope.name="";
		$scope.total=0;

		$scope.displayValue=function(){
			var totalValue=getTotal($scope.name);
			$scope.total=totalValue;
		};
		function getTotal(string){
			var tot=0;
			for(var i=0;i<string.length;i++){
				tot+=string.charCodeAt(i);
			}
			return tot;
		}
	});
})();