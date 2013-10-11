

function DeathrayMenuController($scope){

	$scope.isDisabled = false;
	
	$scope.stun = function(){
		$scope.isDisabled = true;
	}
	
	
}