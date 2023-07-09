"use strict";
// A breakpoint is a point of code where the debugger will automatically pause the JavaScript execution.
/**
 *the function gets a number and checks if it's prime or not.
 * @param {Number} num - the number to be checked
 * @returns {Boolean} true if the number is prime,false otherwise
 */
function isPrime(num) {
  for (let j = 2; j < num; j++) {
    if (num % j == 0) return false;
  }
  return true;
}
// Avoid comments:
// That tell “how code works” and “what it does”.
/**
 * the function get a number and output any prime number
 * that is less than or equal to the given number
 * @param {Number} num - the limit to print prime numbers >= num
 * @returns {undefined} it returns nothing
 */
function showPrime(num) {
  if (num === undefined) {
    return alert("No arguments passed");
  } else if (typeof num === "string") {
    return alert("pass a number to showPrime");
  }
  let primeNums = ""; //alhamdulillah I fixed that we had undefined printed before the prime numbers, but we debugged the issue
  for (let i = 2; i <= num; i++) {
    if (!isPrime(i)) continue;
    primeNums += `${i}    `;
  }
  alert(primeNums);
}

showPrime(10);

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0) {
  alert(
    `Power ${n} is not supported, please enter an integer number greater than zero`
  );
} else {
  alert(pow(x, n));
}

showPrime;
