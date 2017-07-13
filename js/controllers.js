// this makes my app as a unique variable in our application
let artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope','$http',function MyController($scope, $http) {
  $http.get('./js/data.json').success(function (data) {
    $scope.artists =  data
    $scope.artistOrder =  'name'
  })
}])
artistControllers.controller('DetailController', ['$scope','$http','$routeParams',function MyController($scope, $http, $routeParams) {
  $http.get('./js/data.json').success(function (data) {
    $scope.artists =  data
    $scope.whichItem =  $routeParams.itemId
  })
}])
