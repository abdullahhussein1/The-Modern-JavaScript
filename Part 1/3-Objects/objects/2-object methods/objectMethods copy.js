// alhamdulillah
"use strict";
let user = {
  name: "Muhammed",
  age: 31,
  job: "sale manager",
  isMarried: true,
  numOfChildren: 2,

  //give action to the object
  saySalam: function () {
    console.log("Salam", this.name);
  },

  //this keyword: to use the object informations by its method

  //method shorthand(do same thing as above)
  saysalam() {
    console.log("Salam", user.name);
  },
};
//------------------------------------------

//A function that is a property of an object is called its method.
// user.saySalam();
// user.saysalam();

//------------------------------------------

//we can use user.name instead of this keyword But such code is unreliable, what if we want to copy the object, so if we use the old object name it will do nothing in the new object
let admin = user;
user = null;
// admin.saysalam(); //get error(there is no variable with name user to reference to the object, so we get error when the engine reaches user.name, so its recommended to use this keyword)

//------------------------------------------
//we can use this keyword inside any function even if it is not inside an object
//The rule is simple: if obj.f() is called, then this is obj during the call of f. So it’s either user or admin in the example above.
function something() {
  console.log(this.name, ",something function called");
  // where its called, this==object name
}

admin.something = something;
admin.something();
//but we can't call it outside an object and it throws an error in strict mode
// something();
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

user = makeUser();

alert(user.ref().name); // What's the result?
