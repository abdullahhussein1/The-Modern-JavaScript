//بسم الله الرحمن الرحیم
"use strict";

let currentYear = 2023; //number
let currentUserName = "Abdullah"; //string
let isBigger = 3 > 4; //boolean, it returns false
let moneyTransferred = null; //null
let someThing = undefined; //undefined
let inf = 1 / 0; //infinity
let bigInteger = 111111111132222222222n; //bigInt
let newUser = {
  //object
  name: "Abdullah",
  age: 20,
  gender: "male",
  country: "Iraq",
  isMarried: false,
};

// ---------------'js is dinamically tiped'
let messege = "Assalamu alaik";
messege = 9;

// --------we can use any js code in backticks
const func = (e) => {
  return 1 + 1;
};
let back = `${func()}`;
alert(back);
