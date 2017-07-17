let myModule = angular.module('myApp',[])
myModule.controller('mainCntr', Main)

function Main($scope, $interval) {
  update();
  $scope.updateTime = function () {
    console.log('updateTime clicked!!');
  }

  function update() {
    currentTime = new Date();
    $scope.hr = currentTime.getHours()
    $scope.min = currentTime.getMinutes()
    $scope.sec = currentTime.getSeconds()
  }

  $interval(function () {
    update()
  }, 1000)

}
