"use strict";
//if we have an array of objects, how can we get the object that we want?
/*let users = [
  {
    id: 1,
    name: "Ahmed",
    age: 8,
    gender: "male",
  },
  {
    id: 2,
    name: "Arina",
    age: 8,
    gender: "female",
  },
  {
    id: 3,
    name: "Adam",
    age: 2,
    gender: "Male",
  },
];

 //so, if we have an array of objects
//find: it returns the first object that matches the condition
//filter: it returns an array of objects that matches the condition

//to get an object with id 2, we have to use find because we have just one object with that id;
let user1 = users.find((value) => value.id === 2);
//we know in arrow functions if we have one line, we don't need to write return keyword because it will be added explicitly;

//to get male users (can be more that one), we have to use filter function;
let maleUsers = users.filter((value) => value.gender.toLowerCase() === "male");

// console.table(maleUsers);

//to get just the ages of all objects of the array we can use map function;
let ageUsers = users.map((value) => value.age);

console.log(ageUsers);

let sortedAgeUsers = ageUsers.sort((a, b) => a - b);

console.log(sortedAgeUsers); */
// ----------------------------------------------------------------
/* let str = "Zaid,Ali,Yasin";
console.log(str);
let arrOfStr = str.split(","); //string -> array
console.log(arrOfStr);
let strOfArr = arrOfStr.join(","); //reverse of split function, array -> string
console.log(strOfArr); */
// ----------------------------------------------------------------
/* let nums = [1, 2, 4, 19, 2];

let sum = 0;

nums.forEach((value) => (sum += value));

console.log(sum);
//easier way to do the same thing: using reduce function
let sumOfNums = nums.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

console.log(sumOfNums); */

// function User(id, name, age, gender) {
//   return {
//     id,
//     name,
//     age,
//     gender,
//   };
// }

// let users = [
//   new User(1, "Arina", 8, "female"),
//   new User(2, "Yousif", 13, "male"),
//   new User(3, "Iris", 5, "female"),
// ];

//forEach, find, findIndex, filter, map , reduce
/* 
  forEach: loop through each element in the array;
  find: returns the first object matching the given condition
  findIndex: returns the index of the first object matching the given condition;
  filter: returns an array of objects that match the given condition
  map: returns an array of object key-value pairs that matches the given condition
  reduce: the same as filter but has extra parameter that returns the result of the previous iteration for the next iteration.
*/

/* 
split: string -> array;
join : array -> string;
*/
// ------------------------exercises ------------------------------

// function camelize(str = "") {
//   let strArr = str.split("-");

//   strArr.forEach((value, index) => {
//     if (index > 0) {
//       value = value.split("");
//       value[0] = value[0].toUpperCase();
//       value = value.join("");
//       strArr[index] = value;
//     }
//   });

//   return strArr.join("");
// }
/* 
let str = "camel-case-insensitive";

console.log(camelize(str)); */
//better solution
/* function camelize(str) {
  return str
    .split("-")
    .map((word, index) => {
      return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
    })
    .join("");
} */
// -_-_-_-_-_-_-_-_-_-_-_-_ 2 -_-_-_-_-_-_-_-_-_-_-_-_
// let arr = [1, 3, 8, 5];

/* function filterRange(arr, a, b) {
  let filteredArr = [];
  arr.forEach((value) => {
    if (value >= a && value <= b) {
      filteredArr.push(value);
    }
  });

  return filteredArr;
} */
//better solution
/* function filterRange(arr, a, b) {
  return arr.filter((value) => value >= a && value <= b);
} */

// let filtered = filterRange(arr, 1, 4);

// alert(filtered); // 3,1 (matching values)

// alert(arr); // 5,3,8,1 (not modified)

// -_-_-_-_-_-_-_-_-_-_-_-_ 3 -_-_-_-_-_-_-_-_-_-_-_-_
/* let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

function filterRangeInPlace(array = [], a = 0, b = 0) {
  arr = array.filter((value) => value >= a && value <= b);
}

alert(arr); */
// -_-_-_-_-_-_-_-_-_-_-_-_ 4 -_-_-_-_-_-_-_-_-_-_-_-_
/* 
let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
arr.sort((a, b) => b - a);

alert(arr); // 8, 5, 2, 1, -10 */

// -_-_-_-_-_-_-_-_-_-_-_-_ 5 -_-_-_-_-_-_-_-_-_-_-_-_
/* let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (no changes)

function copySorted(array = []) {
  return [...array].sort();
} */

// -_-_-_-_-_-_-_-_-_-_-_-_ 6 -_-_-_-_-_-_-_-_-_-_-_-_
// function Calculator() {
//   return {
//     operatorArray: ["+", "-"],
//     operatorFunc: [(a, b) => a + b, (a, b) => a - b],
//     calculate(str) {
//       let strArr = str.split(" ");
//       return this.operatorFunc[
//         this.operatorArray.findIndex((value) => value === strArr[1])
//       ](+strArr[0], +strArr[2]);
//     },
//     addMethod(newOperator, operatorFunction) {
//       this.operatorArray.push(newOperator);
//       this.operatorFunc.push(operatorFunction);
//     },
//   };
// }
/* //better solution
function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = (str) => {
    let strArr = str.split(" ");

    let a = +strArr[0];
    let op = strArr[1];
    let b = +strArr[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = (method, func) => {
    this.methods[method] = func;
  };
}

let calc = new Calculator();

console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8
 */

// -_-_-_-_-_-_-_-_-_-_-_-_ 7 -_-_-_-_-_-_-_-_-_-_-_-_
/* let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((user) => user.name);

alert(names); // John, Pete, Mary

 */

// -_-_-_-_-_-_-_-_-_-_-_-_ 8 -_-_-_-_-_-_-_-_-_-_-_-_
/* let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped =
  users.map((user) => {
    return {
      fullName: `${user.name} ${user.surname}`,
      id: user.id,
    };
  });
// another way
/* users.map((user) => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
  })); 

console.table(usersMapped);

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // John Smith
 */
// -_-_-_-_-_-_-_-_ 9 -_-_-_-_-_-_-_-_

/* function sortByAge(array = []) {
  array.sort((a, b) => a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete */

// -_-_-_-_-_-_-_-_ 10 -_-_-_-_-_-_-_-_
/* function shuffle(array) {
  array.sort((a, b) => a * Math.random() - b * Math.random());
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr); */

// -_-_-_-_-_-_-_-_ 11 -_-_-_-_-_-_-_-_
/* function getAverageAge(users = []) {
  return users.reduce((prevResult, user) => prevResult + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let users = [john, pete, mary];

alert(getAverageAge(users)); // (25 + 30 + 29) / 3 = 28 */

// -_-_-_-_-_-_-_-_ 12 -_-_-_-_-_-_-_-_

/* function unique(arr = []) {
  let array = [];
  arr.forEach((value) => {
    if (!array.includes(value)) array.push(value);
  });

  return array;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(strings)); // Hare, Krishna, :-O */

// -_-_-_-_-_-_-_-_ 13 -_-_-_-_-_-_-_-_
function groupById(arr = []) {
  return arr.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

console.log(usersById);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}

Please use array .reduce method in the solution.
*/
