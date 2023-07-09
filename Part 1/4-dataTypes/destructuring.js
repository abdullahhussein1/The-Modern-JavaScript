"use strict";

// let arr = ["Ahmed", "Hussein"];

// let [username, surname] = arr;

// console.log(username);
// console.log(surname);

// let [one, two] = "1,2,3".split(",");
// console.log(one, two);

// let numSet = new Set([1, 2, 3]);
// let [onee, , three] = numSet;
// console.log(onee, three);
// ------------------------------------
/* let user = {};

let username = "Arina Hussein";

[user.name, user.surname] = username.split(" ");
console.log(user);
// ---------------for of---------------------
for (let [key, value] of Object.entries(user)) {
  console.log(key, ":", value);
} */
// ----------------...rest--------------------
// let userNames = ["ahmed", "arina", "bushra", "brwa", "Muhammed"];

// let [firstUserName, secondUserName, ...restUserNames] = userNames;

// console.log(firstUserName, secondUserName);
// console.log(restUserNames[1]);
// ----------------default value--------------------
/* let userFullName = ["Arina"];
let [userName = "guest", surName = prompt("surname?", "")] = userFullName;
console.log(userName, surName); */

// -_-_-_-_-_-_-_-_-_-task 1-_-_-_-_-_-_-_-_-_-
/* 
We have an object:

let user = {
  name: "John",
  years: 30
};
Write the destructuring assignment that reads:

name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false, if no such property)
 */
// answer:
/* 
let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;
console.log(name, age, isAdmin); */

// -_-_-_-_-_-_-_-_-_-task 2-_-_-_-_-_-_-_-_-_-
/* 
There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.

/**
 * 
 * @param {object} object with key of person name and value of person salary
 * @return {string} name of the top-paid person in the given salary object,if salaries is empty, returns null, if there are multiple top-paid persons, return any of them.
 */
function topSalary(salaries) {
  let topPaid = {
    person: null,
    salary: 0,
  };

  for (let [person, salary] of Object.entries(salaries)) {
    if (salary > topPaid.salary) {
      topPaid.salary = salary;
      topPaid.person = person;
    }
  }

  return topPaid.person;
}

let salaries = {
  John: 100,
  Pete: 400,
  Mary: 950,
};

console.log(topSalary(salaries));
