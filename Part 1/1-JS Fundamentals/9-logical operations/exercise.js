/* Write an if condition to check that age is between 14 and 90 inclusively.
“Inclusively” means that age can reach the edges 14 or 90. */
// if (age >= 14 && age <= 90)
// ----------------------------inverse------------------------------------
/* 
1-if (!(age >= 14 && age <= 90))
2-if (age < 14 && age > 90) 
*/
// ------------------------------------------------------------
/* let userName = String(prompt("Who is there?"));
// I convreted the value to string so if we get null we can deal with it as a string
if (userName.toLowerCase() === "admin") {
  let password = prompt("Password?");
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === "" || password === "null") {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName === "" || userName === "null") {
  alert("Canceled");
} else {
  alert("I don't know you");
} */

const car = [
  //   {
  //     name: "BMW",
  //     model: "750i",
  //     year: 2023,
  //   },
  //   {
  //     name: "Mercedes-benz",
  //     model: "Maybach",
  //     year: 2022,
  //   },
  //   {
  //     name: "AUDI",
  //     model: "A8",
  //     year: 2021,
  //   },
];

car.length || alert("there is no car");
