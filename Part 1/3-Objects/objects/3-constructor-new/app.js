"use strict";

function User(name, age) {
  // this = {};  (implicitly)

  this.name = name;
  this.age = age;
  console.log(new.target);

  // return this; (implicitly)
}

const user1 = new User("Ahmed", 8);
const user2 = new User("Yousif", 12);

console.table([user1, user2]);
