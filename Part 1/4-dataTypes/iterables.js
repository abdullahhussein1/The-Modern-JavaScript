"use strict";

let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

let array = {
  0: "a",
  1: "b",
  length: 2,
};

//Array.from making real arrays from iterables and array likes .
let arr = Array.from(array);

console.log(arr);

for (let num of arr) {
  console.log(num);
}
