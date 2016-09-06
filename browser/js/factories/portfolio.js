portfolio.factory('projects', function ($http) {
	var factoryObj = {};
	factoryObj.getRepos = function () {
		return $http.get('https://api.github.com/user/repos', {
			username: 'mosane',
			password: 'xxxxxxxxx'
		})
		.then(arr => arr.data)
	}
	return factoryObj;
})	