let calModule = angular.module('myCalc',[]);

calModule.controller=("CalcCnt", CalcCnt);

function CalcCnt() {
  this.updateOperator = function (operator) {
    this.operator = operator;
  }

  this.calculate = function(){
    let value1 = this.value1
    let value2 = this.value2
    switch (this.operator) {
      case '*':
        this.total = value1 * value2
        break;
      case '-':
        this.total = value1 - value2

        break;
      case '+':
        this.total = value1 + value2
        break;
      case '/':
        this.total = value1 / value2
        break;
      default:

    }
  }
}
