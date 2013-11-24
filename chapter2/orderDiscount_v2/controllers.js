
function CartController($scope){
	$scope.bill = {};

	$scope.items = [
		{title: 'Paint pots', quantity: 8, price: 3.95},
		{title: 'Polka dots', quantity: 17, price: 12.95},
		{title: 'Pebbles', quantity: 5, price: 6.95}	
	];
	
	var calculateTotal = function(){
		var total = 0;
		
		for(var i=0; i < $scope.items.length; i++){
			total = total + $scope.items[i].price * $scope.items[i].quantity;
		}
		$scope.bill.totalCart = total;
		$scope.bill.discount = total > 100 ? 10:0;
		$scope.bill.subtotal = total - $scope.bill.discount;
		
	};
	
	/*
	$scope.subtotal = function(){
		return $scope.totalCart() - $scope.bill.discount;
	}
	*/
	
	/*
	function calculateDiscount(newValue,oldValue,scope){
		$scope.bill.discount = newValue > 100 ? 10:0;
	}
	*/
	
	//	$scope.$watch($scope.totalCart,calculateDiscount)
	$scope.$watch('items',calculateTotal,true)

}