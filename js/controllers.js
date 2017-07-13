// this makes my app as a unique variable in our application
let artistControllers = angular.module('artistControllers', ['ngAnimate']);

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

    if($routeParams.itemId > 0){
      $scope.preveItem = Number($routeParams.itemId) -1
    }else{
      $scope.preveItem = $scope.artists.length -1
    }

    if($routeParams.itemId < $scope.artists.length - 1){
      $scope.nextItem = Number($routeParams.itemId) +1
    }else{
      $scope.nextItem = 0
    }
  })
}])
