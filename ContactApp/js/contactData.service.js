(function () {
  let app = angular.module('ContactApp')
  app.service('contactDataSrv',function ($http) {
    let self = this;

    this.getContacts = function () {
      let promise = $http.get('http://localhost:3000/contacts')
      .then(function(response){
        return response.data;
      })
      return promise;
    }

    this.updateUser = function (userData) {
      return $http.put('http://localhost:3000/contacts/' + userData.id, userData)
    }

    this.createUser = function (userData) {
      return $http.post('http://localhost:3000/contacts/', userData)
    }

    this.deleteUser = function (userData) {
      return $http.delete('http://localhost:3000/contacts/' + userData.id)
    }

  })
})()
