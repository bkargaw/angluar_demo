let app = angular.module('ContactApp',[])
app.controller('headerCnt',headerCnt);
app.controller('footerCnt',footerCnt);

function headerCnt(appDataSvc) {
  this.appTitle = appDataSvc.name
}

function footerCnt(appDataSvc, ) {
  this.appTitle = appDataSvc.name
}
