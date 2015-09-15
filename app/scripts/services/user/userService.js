'use strict';

/**
 * @ngdoc service
 * @name planistoApp.user/userService
 * @description
 * # user/userService
 * Service in the planistoApp.
 */
angular.module('planistoApp')
.factory('userService', ['$http', function($http) {
  var factory = {};

  factory.signIn = function(authRequest) {
    return $http.post('http://localhost:4100/auth/login', authRequest)
    .success(function() {

    }).error(function(){

    });
  };

  return factory;
  }]);

 


