
function StartUpController($scope){
	$scope.funding = {startingEstimate:0};
	
	$scope.computeNeeded = function(){
	
		$scope.funding.needed = $scope.funding.startingEstimate * 10;
	}

}