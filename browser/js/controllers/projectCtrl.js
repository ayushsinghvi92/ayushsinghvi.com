portfolio.controller('projCTRL', function ($scope, projects) {
	projects.getRepos()
	.then(function (arr){
		$scope.repos = arr;
		console.log($scope.repos)
	})
})