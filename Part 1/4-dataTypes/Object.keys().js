"use strict";

const carPrice = {
  bmw: "220000",
  mercedes: "280000",
  volkswegon: "190000",
};

let doubledCarPrice = Object.fromEntries(
  Object.entries(carPrice).map((value) => [value[0], value[1] * 2])
);
console.log(doubledCarPrice);
