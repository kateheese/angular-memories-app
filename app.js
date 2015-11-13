var app = angular.module('memories', ['ngRoute'])

app.config(function ($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: '/partials/home.html',
      controller: 'HomeController'
    })
    .when('/years/:year', {
      templateUrl: '/partials/year.html',
      controller: 'YearController'
    })
  $locationProvider.html5Mode(true);
})