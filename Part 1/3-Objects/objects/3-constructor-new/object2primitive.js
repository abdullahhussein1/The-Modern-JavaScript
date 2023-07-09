"use strict";

/* const date1 = new Date("2001-8-3");
const date2 = new Date();

console.log((date2 - date1) / 1000 / 3600 / 24 / 30 / 12); */
// ----------------------------------------------------------------
/* let user = {
  name: "John",
  money: 1000,
  //   [Symbol.toPrimitive](hint) {
  //     alert(`hint= ${hint}`);
  //     return hint == "string" ? `name=${this.name}` : this.money;
  //   },
  toString() {  //hint: string
    return this.name;
  },
  valueOf() {   //hint: number || default
    return this.money;
  },
};

alert(user);
alert(+user);
alert(user + 100);
 */
// ------------------------
/* let user = {
  name: "Abdullah",
  age: 22,

  toString() {
    return `[name: ${this.name}, age: ${this.age}]`;
  },
  valueOf() {
    return this.age;
  },
};

alert(user); //hint: string
alert(+user); // hint: number
alert(user + 1); //hint : default */
//----------------------------------------------------------------
function Player(id, name, level) {
  this.id = id;
  this.name = name;
  this.level = level;

  this.toString = function () {
    return `[id= ${this.id}, name= ${this.name}, level= ${this.level} ]`;
  };
  this.valueOf = function () {
    return this.level;
  };
}

let player1 = new Player(1, "Muhammed", 2);
let player2 = new Player(2, "Ahmed", 10);
let player3 = new Player(3, "Arina", 20);

console.log(String(player1));
alert(player1);
alert(player2);
alert(player3);
// ----------------------------------------------------------------
let user = {
  name: "John",
  age: 11,
  toString() {
    return "something";
  },
};
