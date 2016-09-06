'use strict';

portfolio.config(function ($stateProvider) {
	$stateProvider.state('projects', {
		url:'/projects',
		templateUrl: 'templates/portfolio.html',
		controller: 'projCTRL'
		}
	)
})