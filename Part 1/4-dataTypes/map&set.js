"use strict";

// map is the same as object but it can store values with a key with any data   type

let john = {
  name: "John",
  age: 21,
};

let user = new Map([
  ["name", "John"],
  ["email", "admin@example.com"],
  [john, "something"],
]);

// user
//   .set("name", "John")
//   .set("email", "admin@example.com")
//   .set(john, "something");

for (let key of user) {
  console.log(key);
}

user.forEach((value, key) => {
  console.log(key, ":", value);
});

let johnMap = new Map(Object.entries(john));

console.log(johnMap.get("age"));

let userObject = Object.fromEntries(user);

console.log(userObject);

// _-_-_-_-_-_-_-_-1_-_-_-_-_-_-_-
//should return an array of unique values
/* function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
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

alert(unique(values)); // Hare, Krishna, :-O */

// _-_-_-_-_-_-_-_-2_-_-_-_-_-_-_-
/* function aclean(arr) {
  let map = new Map();

  for (const word of arr) {
    let sorterWord = word.toLowerCase().split("").sort().join("");
    map.set(sorterWord, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
 */

// _-_-_-_-_-_-_-_-3_-_-_-_-_-_-_-

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
keys.push("more");

console.log(keys);
