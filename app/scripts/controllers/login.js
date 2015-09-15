'use strict';

/**
 * @ngdoc function
 * @name planistoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the planistoApp
 */
angular.module('planistoApp')
  .controller('LoginCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.login = true;
  $scope.register = false;

  $scope.login = function() {
    $scope.login = true;
    $scope.register = false;
  }

  $scope.register = function() {
    $scope.login = false;
    $scope.register = true;
  }

  $scope.user = {};

  $scope.signin = function() {
    var authRequest = {email : $scope.user.email, password : $scope.user.password};
    $http.post('http://localhost:4100/auth/login', authRequest)
    .success(function(response , data) {
      alert(data);
    });
    
  }
  
  });
