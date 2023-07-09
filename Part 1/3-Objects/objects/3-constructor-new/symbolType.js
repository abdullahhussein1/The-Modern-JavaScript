"use strict";

function User(name, age, city, street) {
  (this.name = name),
    (this.age = age),
    (this.address = {
      city,
      street,
    });
}

let user = new User("Adam", 2, "Sulaymanyah", "Khabat");
let user2 = new User("Adam", 2, "Sulaymanyah", "Khabat");

// console.table(user);

//Symbol.for(key) for global Symbol;
//Symbol.keyFor(key) for global Symbol;
let id = Symbol.for("id");

user[id] = "some data science";
// console.table(user);

let id2 = Symbol.for("id");
//override when the first and second symbols are global and have the same definition
user[id2] = "override";
// console.table(user);
const userSymbols = Object.getOwnPropertySymbols(user);
// console.log(userSymbols);
// console.log(id == id2);
