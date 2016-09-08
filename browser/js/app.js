'use strict';

const portfolio = angular.module('portfolio', ['ui.router'])

portfolio.run(function ($rootScope) {
	$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
		console.error('Error Transitioning From' + fromState.name + "to" + toState.name + ":" + error);
	})
});

portfolio.config(function ($locationProvider){
	$locationProvider.html5Mode(true);
})