(function functionName() {

  angular.module('ContactApp').controller('ContactCnt',ContactCnt);

  function ContactCnt(contactDataSrv) {
    let self = this;

    contactDataSrv.getContacts()
    .then(function(data){
      self.contacts = data;
      self.selectedContact = data[0];
    })
    
    this.selectedContact;
    this.selectContact =function (index) {
      this.selectedContact = this.contacts[index];
    }
  }
})();
