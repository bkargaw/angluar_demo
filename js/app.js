let myApp = angular.module('myApp',[
  'ngRoute',
  'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailController'
  }).
  otherwise({
    redirectTo: '/list'
  })
}] )
