"use strict";
//____increment(++)____decrement(--)____only applied to variables
let counter = 0;
console.log(counter++); //output:0 then counter=+1
console.log(++counter); //counter=+1 then output:2
console.log(--counter); //counter=-1 then output:1
console.log(counter--); //output:1 then counter-=1

//comma
let a;
// alert((a=1+2,3+4));

let b = 0;
let c = b++; //also reinitialize b
console.log("c =", c);
// alert(b)//1 ^-^

/* 
"" + 1 + 0 => "10"
"" - 1 + 0 => -1 
true + false => 1
6 / "3" => 2
"2" * "3" => 6
4 + 5 + "px" => "9px"
"$" + 4 + 5 => "$45"
"4" - 2 => 2
"4px" - 2 => NaN
"  -9  " + 5 => "  -9  5"
"  -9  " - 5 => NaN (wrong answer) , the answer is -14,when the string converts to number, the space of the sides will ignored
null + 1 => 1
undefined + 1 => undefined
" \t \n" - 2 => NaN (wrong answer) , the answer is -2, space will ignored and the string will convert to number, if we ignore the spaces the reminder will be empty string, ""-2=-2
*/
//exercise
/* let y = prompt("First number?", 1);
let z = prompt("Second number?", 2);

alert(y + z); // 12 

//first solution
alert(Number(y)+Number(z)); // 3
//shorter solution
alert(+y + +z); // 3

// or we can change the values inside the variable
let n = +prompt("First number?", 1);
let s = +prompt("Second number?", 2);
//then output the result

alert(n + s); // 3 */
