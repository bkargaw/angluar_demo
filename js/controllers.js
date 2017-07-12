// this makes my app as a unique variable in our application
let myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope','$http',function MyController($scope, $http) {
  $http.get('./js/data.json').success(function (data) {
    $scope.artists =  data
  })
}])
