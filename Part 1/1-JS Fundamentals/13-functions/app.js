/* eslint-disable no-unused-vars */
"use strict";

/* 
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||
*/

// function checkAge(age) {
//   return age > 18 ? true : confirm("Did parents allow you?");
// }
//uncomment one of them
// function checkAge(age) {
//   return age > 18 || confirm("Did parents allow you?");
// }

// checkAge(19);

// ----------------------------------------------------------------

/* function min(a, b) {
  if (a < b) return a;
  return b;
}
// uncomment one of them in a time
function min(a, b){
  return a<b ? a : b;
} */
// ------------------------------FUNCTION FOR POWER----------------------------------
/* function pow(x, n) {
  let sum = 1;
  for (let i = 0; i < n; i++) {
    sum *= x;
  }
  return sum;
}

function poww(x, n) {
  return x ** n;
}

let x = +prompt("x:", "");
let n = +prompt("n:", "");

if (n >= 1) {
  alert(poww(x, n));
} else {
  alert("n must be greater than 1");
} */
// ------------------------------FIND AND SHOW PRIME NUMBERS----------------------------------
/* function isPrime(num) {
  for (let j = 2; j < num; j++) {
    if (num % j == 0) return false;
  }
  return true;
}

function showPrime(num) {
  if (num === undefined) {
    return alert("No arguments passed");
  } else if (typeof num === "string") {
    return alert("pass a number to showPrime");
  }
  let primeNums;
  for (let i = 2; i <= num; i++) {
    if (!isPrime(i)) continue;
    primeNums += `${i}    `;
  }
  alert(primeNums);
}

// showPrime(10); */
// ------------------------------FUNCTIONS WITHOUT PARENTHESES----------------------------------
/*
// alert(isPrime); call functions without parentheses to see the function code
//function is also a value
 let saySalam = function () {
  alert("Assalamu alaikum brothers and sisters in ISLAM");
};

saySalam();

let sayAssalamuAlaikum = saySalam;
alert(sayAssalamuAlaikum);
sayAssalamuAlaikum(); */
// ------------------------------CALLBACK FUNCTIONS----------------------------------
/* function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed.");
}
function showCanceled() {
  alert("You canceled the execution");
}

ask("Are you Admin", showOk, showCanceled); */

let showMyName = function (name) {
  alert("My name is " + name);
};

showMyName("Abdullah");
