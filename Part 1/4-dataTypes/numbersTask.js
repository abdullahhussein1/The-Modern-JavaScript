"use strict";

// ----------------1----------------
/* let a = +prompt("a=", 1);
let b = +prompt("b=", 1);

alert(`sum= ${a + b}`); */
// ----------------2----------------
// alert(Math.round(6.35 * 10) / 10);
// ----------------3----------------
/* function readNumber() {
  let a;
  do {
    a = prompt("Enter a number:", "");
    if (a == null || a == "") {
      return null;
    }
  } while (!isFinite(a));
  return +a; 
}

alert(readNumber()); */
// ----------------4----------------
/* function random(min, max) {
  return min + Math.random() * (max - min);
}

alert(random(5, 20)); */
// ----------------5----------------
function random(min, max) {
  return Math.round(min - 1 + Math.random() * (max - min + 1));
}

console.log(random(5, 20));
