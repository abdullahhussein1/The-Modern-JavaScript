"use strict";

let billion = 1000000000;

billion = 1_000_000_000; //same as above;
billion = 1e9; //same as above;

// alert(1e-6);for smaller numbers;
// alert(0xff); //hexadecimal
// alert(0b110010); //binary
// alert(0o321); //octal

// alert((123).toString());

let num = 2.4324253;
Math.floor(num);
Math.ceil(num);
Math.round(num);
Math.trunc(num);

+num.toFixed(2);

console.log((0.1 + 0.2).toFixed(2) == 0.3);
Object.is(NaN, NaN); //Returns true if the values are the same value, false otherwise.

Object.is(NaN, NaN); //true
NaN === NaN; //false
Object.is(0, -0); //false
0 === -0; //true
