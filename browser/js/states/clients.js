'use strict';

portfolio.config(function ($stateProvider) {
    $stateProvider.state('clients', {
        url: '/clients',
        templateUrl: 'templates/clients.html'
    })
});