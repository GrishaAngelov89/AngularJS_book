

function HeaderController($scope){

	$scope.isError = false;
	$scope.isWarning = false;
	
	$scope.showError = function(){
		$scope.isError = true;
		$scope.isWarning = false;

		$scope.messageText = "This is error!";
	}
	
	$scope.showWarning = function(){
		
		$scope.isWarning = true;		
		$scope.isError = false;
		
		$scope.messageText = "This is warning!";
	}

}