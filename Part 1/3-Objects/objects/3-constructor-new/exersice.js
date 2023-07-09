"use strict";
/* 
function Calculator() {
  this.read = function () {
    this.a = +prompt("a = ", 1);
    this.b = +prompt("b = ", 1);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
 */
// --------------------------------
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("Enter num to add", 1);
  };
}

const accumulator = new Accumulator(1);

accumulator?.read();
accumulator?.read();

alert(accumulator.value);
