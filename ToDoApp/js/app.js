let module = angular.module('myToDoApp',[]);

module.controller('ToDoCntr', ToDoCntr);

function ToDoCntr() {
  this.list = [];
  this.edit = false;

  this.add = function () {
    if(this.toBeAdded && this.toBeAdded.length){
      this.list.push(this.toBeAdded);
      this.toBeAdded = "";
    }
  }

  this.delete = function(index) {
    this.list.splice(index,1)
  }
  this.toggelEdit = function() {
    this.edit = !this.edit
  }
}
