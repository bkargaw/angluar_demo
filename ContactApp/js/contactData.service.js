(function () {
  let app = angular.module('ContactApp')
  app.service('contactDataSrv',function ($http) {
    let self = this;

    this.getContacts = function () {
      let promise = $http.get('http://localhost:3000/contacts')
      .then(function(contacts){
        return contacts.data;
      })
      
      return promise;
    }


  })
})()
