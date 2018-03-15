var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('add 5+7', function(){
    calculator.previousTotal = 5;
    calculator.add(7);
    assert.equal(12, calculator.runningTotal);
  });
  it('subtract 9-6', function(){
    calculator.previousTotal = 9;
    calculator.subtract(6);
    assert.equal(3, calculator.runningTotal);
  });

  it('multiply 4*5', function(){
    calculator.previousTotal = 4;
    calculator.multiply(5);
    assert.equal(20, calculator.runningTotal);
  });
  it('divide 14/7', function(){
    calculator.previousTotal = 14;
    calculator.divide(7);
    assert.equal(2, calculator.runningTotal);
  });

  it('multiple number clicks', function(){
    calculator.numberClick(3);
    calculator.numberClick(3);
    assert.equal(33, calculator.runningTotal);
  });


  it('multiple operator clicks', function(){
    calculator.numberClick(3);
    calculator.numberClick(3);
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(21, calculator.runningTotal);
  });

  it('clear operator clicks', function(){
    calculator.numberClick(8);
    calculator.numberClick(2);
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  });

});
