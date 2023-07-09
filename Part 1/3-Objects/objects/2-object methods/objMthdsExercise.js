/* // alhamdulillah
"use strict";

let calculator = {
  read() {
    this.a = +prompt("a =", 1);
    this.b = +prompt("b =", 1);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
 */
// ----------------------------------------------------------------
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep(); // 0
