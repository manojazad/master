'use strict';

/**
 * @ngdoc overview
 * @name planistoApp
 * @description
 * # planistoApp
 *
 * Main module of the application.
 */
angular
  .module('planistoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'google.places'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/contacts.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/search', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl',
        controllerAs: 'results'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
