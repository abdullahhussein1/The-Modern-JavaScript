"use strict";

let str = "assalamu alaikum";

// alert(str.at(-1)); //getting last character;

// for (let char of str) {
//   //for iterating over characters
//   alert(char);
// }

/* let pos = 0;
while (true) {
  pos = str.indexOf("al", pos);
  if (pos == -1) break;
  alert(`found at ${pos}`);
  pos += 1;
} */
/* 
console.log(str.slice(-5));
console.log(str.substring(4, 2)); */
// -----------------1----------------
/* function ucFirst(text) {
  if (!text) return text;
  text = text.at(0).toUpperCase() + text.slice(1);
  return text;
}

console.log(ucFirst(str)); */

// -----------------2----------------
function truncate(str, maxLength) {
  return maxLength > str.length ? str : (str = str.slice(0, maxLength) + "...");
}

console.log(truncate(str, 2));
