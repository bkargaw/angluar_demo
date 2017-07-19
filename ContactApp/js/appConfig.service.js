(function () {
  let app = angular.module('ContactApp')

  function AppConfig(appNameSrv) {
      this.name = appNameSrv,
      this.auther =  'Bruk Argaw',
      this.company = 'bruk.io',
      this.version = 1
  }
  
  app.service('appDataSvc',AppConfig)
})()
