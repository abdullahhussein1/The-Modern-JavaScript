"use strict";

let fruits = ["apple", "orange", "banana"];

// console.log(fruits);

// console.log(fruits.pop());

// console.log(fruits);

// fruits.push("grape", "fig");

// console.log(fruits);

// console.log(fruits.unshift("blueberry"));
/* 
push('new element'): appends new elements to the end of an array and returns the new length of the array;

unshift('new element'): inserts new elements to the start of an array and returns the new length of the array;

pop(): removes the last element of an array and returns it;

shift(): removes teh first element of an array and returns it;

talking about performance, push/pop are much faster than unshift/shift because they don't need to renumbering all elements after each call;
 */
// -------------------------------------------------
/* console.log(fruits.at(-1)); //get last element;

//looping through all array elements;
for (let fruit of fruits) {
  console.log(fruit);
} */
// ---------------exercise-----------------
/* let accent = ["badini", "sorani"];
accent.push("hawrami");
accent[Math.ceil(accent.length / 2) - 1] = "kurmanji";
alert(accent.shift());
accent.unshift("zazaiy", "babani");

console.log(accent); */
// ---------------2-----------------
/* function sumInput() {

  let numArray = [];
  let arraySum = 0;

  while (true) {
    let num = prompt("Enter a Number:", 0);

    if (!isFinite(num) || num == "" || num == null) break;

    numArray.push(+num);
  } 

  for (let num of numArray) {
    arraySum += num;
  }

  return arraySum;
}

console.log("sum = ", sumInput()); */
// ---------------3-----------------
function getMaxSubSum(arr) {
  let sum = 0;
  let maxSum = 0;
  for (let num of arr) {
    sum += num;
    maxSum = Math.max(maxSum, sum);
    if (sum < 0) sum = 0;
  }
  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
