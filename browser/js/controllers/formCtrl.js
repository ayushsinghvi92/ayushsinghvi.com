portfolio.controller('formCtrl', function ($scope) {
	console.log('hitting form controller')
	$scope.submitForm = function () {
		console.log($scope.form)
	}
})