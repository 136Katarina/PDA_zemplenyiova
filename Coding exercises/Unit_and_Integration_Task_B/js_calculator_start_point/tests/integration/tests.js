var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  it('should have working number buttons(2)', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should have working number buttons (47)', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    element(by.css('#number7')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('47')
  });

  it('the number buttons work to update the display of the running total', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    element(by.css('#number7')).click();
    element(by.css('#number5')).click();
    element(by.css('#number6')).click();
    element(by.css('#number3')).click();
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#number9')).click();
    element(by.css('#number4')).click();
    element(by.css('#number0')).click();
    element(by.css('#number8')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('47563129408')
  });

  it('add operation works', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number4')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9');
  });

  it('subtract operation works', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number6')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3');
  });


  it('multiply operation works', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10');
  });

  it('divide operation works', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number8')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  });

  it('can chain multiple operations(+, -)', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('13');
  });

  it('can chain multiple operations(*, /)', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10');
  });

  it('works for positive numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number6')).click();
    element(by.css('#number0')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('714');
  });


  it('works for negative numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number8')).click();
    element(by.css('#number5')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-841');
  });

  it('works for decimal numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number1')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1.6428571428571428');
  });

  it('works for negative numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number8')).click();
    element(by.css('#number5')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-841');
  });

  it('works for large numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number8')).click();
    element(by.css('#number5')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number8')).click();
    element(by.css('#number4')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('718510100');
  });


  it('if you devide by zero', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number4')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Infinity');
  });


  it('pressing multiply operator', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Infinity');
  });















});
