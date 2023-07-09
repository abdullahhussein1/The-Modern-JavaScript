// اللهم لك الحمد کما ینبغی لجلال وجهك ولعظیم سلطانك

"use strict";
// ----------------------------------------------------------------
/* 
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/

/* let user = {};

user.name = "Bushra";
user.surname = "Hussein";
user.name = "Arina";

delete user.name;

console.table(user); */
// ----------------------------------------------------------------
/* function isEmpty(obj) {
  for (let prop in obj) {
    return false;
  }

  return true;
}

let user = {
  name: "Abdullah",
};

console.log(isEmpty(user)); */
// ----------------------------------------------------------------
/* 
We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
*/
/* let salaries = {
  Ahmed: 1000,
  Brwa: 2500,
  Muhammed: 1500,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum); */
// ----------------------------------------------------------------
/* function multiplyNumProps(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === "number") {
      obj[prop] *= 2;
    }
  }
}

let user = {
  name: "Brwa",
  age: 24,
  birth: 1999,
};

console.table(user);

let copyUser = { ...user };
//or Object.assign({}, user);
//or structuredClone(user) to real copy an object

//to share the reference between two variables;
let copyUser2 = user;

copyUser.name = "aa";
copyUser2.name = "bb";
multiplyNumProps(user);

console.table(user);
console.table(copyUser);
 */
// --------------------------------------------------
/* let user = {
  id: 1,
  name: "Abdullah",
};

let admin = user;

admin.id = 2;
admin.name = "Brwa Hussein";

console.table([user, admin]); */
/* 
let user = {
  id: 1,
  name: "Muhammed Hussein",
};

let admin = { ...user };
admin.id = 2;
admin.name = "Muhhamed Hussein";

console.table([user, admin]);

user = null;
// Now Muhammed Hussein becomes unreachable. There’s no way to access it, no references to it. Garbage collector will junk the data and free the memory.
 */

function parentt(father, child) {
  father.child = child;
  child.father = father;

  return {
    father,
    child,
  };
}

let a = parentt(
  {
    name: "Hussein",
  },
  {
    name: "Bushra",
  }
);

console.table(a);
a = null;
//the two objects have referenced to each other but if they become unreachable then they will be useless, so the garbage collector will collect them.
