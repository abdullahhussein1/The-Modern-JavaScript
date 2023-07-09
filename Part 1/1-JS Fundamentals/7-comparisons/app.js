"use strict";
console.log("Assalamu Alaikum Brothers and sisters in islam");

console.log(false == 0); //true
console.log(false === 0); //false
console.log(null == 0); // only (null==undefined)=>true
console.log(null == undefined); //true
console.log(null === undefined); //false

/* 
undefined with == remains undefined
undefined with < > <= >= converts to NaN

null with == remains null
null with < > <= >= converts to 0 
*/

//important note:When comparing values of different types, JavaScript converts the values to numbers, so they must be different types to be converted to number.

/*  exercise  

5 > 4                   true
"apple" > "pineapple"   false
"2" > "12"              false, wrong answer, it compares them char by char 
undefined ==   null     true
undefined === null      false
null == "\n0\n" false   false
null === +"\n0\n"       false

*/
