"use strict";

let playerNum = 3.13723;

console.log(playerNum.toFixed(2));

let myName = "Abdullah";

console.log(myName.charAt(3).toLowerCase());

//these are not objects, so how they can provide build-in methods for us?
//creating temperary objects for them then destroy them by java script engine

let str = "abcdefghij";

//for understanding
//java script engine will create these temporary objects
let strObj = {
  text: "abcdefghij",
  toUpperCase() {
    return this.text.toUpperCase();
  },
};
alert(strObj.toUpperCase());
//destroy the temporary object, make it really lite to process;

//we can not add new methods or properties for a primitive datatype, primitives cannot store additional data, just one value, and that is the key difference between primitives and objects;
// str.something = "a";
// alert(str.something);throws an error(in strict mode, without strict mode become undefined);
