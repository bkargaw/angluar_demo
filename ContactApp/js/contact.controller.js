(function functionName() {

  angular.module('ContactApp').controller('ContactCnt',ContactCnt);

  function ContactCnt(contactDataSrv) {
    let self = this;
    this.editMode = false;

    this.deleteUser = function(){
      console.log('delete called  with name' + this.selectedContact.name.first )
      contactDataSrv.deleteUser(this.selectedContact)
      .then(function () {
        self.successMsg = 'User Data Successfully Updated!!'
        self.selectedContact = {}
      },
        function () {
          self.errorMsg = "There was an error, Please try again"
        }
      )
    }
    this.addContact = function() {
      this.selectedContact = {
        id: new Date().toTimeString()
      }
      this.editMode = true;
    }

    this.toggelEditMode = function () {
      this.editMode = !this.editMode;
    }

    this.saveUser = function() {
      if (this.editMode){
        this.toggelEditMode()
        contactDataSrv.updateUser(this.selectedContact)
        .then(function () {
          self.successMsg = 'User Data Successfully Updated!!'
        },
          function () {
            self.errorMsg = "There was an error, Please try again"
          }
        )
      }else {
        contactDataSrv.createUser(this.selectedContact)
        .then(function () {
          self.successMsg = 'Contact Sucrcessfully Added!!'
        },
          function () {
            self.errorMsg = "There was an error, Please try again"
          }
        )
      }

    }

    contactDataSrv.getContacts()
    .then(function(data){
      self.contacts = data;
      self.selectedContact = data[0];
    })

    this.selectContact =function (index) {
      this.selectedContact = this.contacts[index];
      this.editMode = false;
      this.successMsg = undefined;
      this.errorMsg = undefined;
    }
  }
})();
