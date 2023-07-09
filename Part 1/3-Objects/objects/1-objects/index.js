"use strict";
/* let fruit = prompt(
  "Enter a fruit name to be the key name:",
  "apple"
).toLowerCase();

let user = {
  id: 1,
  name: "Yousif",
  [fruit + "Computer"]: 5,
  age: 13,
  "academic year": 6,
};

console.table(user);
console.log(user["name"]);
console.log(user["academic year"]);

let key = prompt("Enter key name to show its value:", "name").toLowerCase();

alert(user[key] ?? "Invalid key name"); */
// ----------------------------------------------------------------
/* function user(name, age) {
  return {
    name, //same as name = name;
    age, //same as age = age;
  };
}

let user1 = user("Yousif", 14);
let user2 = user("Arina", 8);
let user3 = user("Ahmed", 8);
console.table([user1, user2, user3]);

console.log("name" in user1);
console.log("age" in user2);
console.log("gender" in user3);

//Loop through an object
for (let prop in user1) {
  console.log(user1[prop]);
}
 */
// ----------------------------------------------------------------
/* let codes = {
  49: "Germain",
  10: "Britain",
  1: "Islamic State IN SHA ALLAH",
  2: "Masjid Al-Aqsa",
};
let result = "";
for (let code in codes) {
  result += `${code}: ${codes[code]}\n`;
}
// integer properies will be sorted ascending, other types sorted by creation order
console.log(result); */
