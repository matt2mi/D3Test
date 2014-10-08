'use strict';

// Different modules injected
angular.module('controllers', []);
angular.module('directives', []);
angular.module('services', []);

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'controllers',
  'directives',
  'services'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/main',
        {
            controller:'MainCtrl',
            templateUrl:'views/main.html'
        })
    .otherwise({redirectTo: '/main'});
}]);