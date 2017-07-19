(function functionName() {

  angular.module('ContactApp').controller('ContactCnt',ContactCnt);

  function ContactCnt(contactDataSrv) {
    this.contacts= contactDataSrv.contacts

    this.selectedContact = this.contacts[0];

    this.selectContact =function (index) {
      this.selectedContact = this.contacts[index];

    }
  }
})();
