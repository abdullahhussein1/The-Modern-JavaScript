"use strict";

//SUMMARY:
// 1-OR || returns the first truthy value or the last one if no truthy value is found.

// 2-AND && returns the first falsy value or the last value if none were found.

// 3-A double NOT !! is sometimes used for converting a value to boolean type:

// 4-The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||, and the precedence of && is higher than ||.

/* 
true || alert("not printed");
false || alert("printed");
In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.
ئۆڕ لە کوێ گەیشتە ترو، نرخی ڕاستەقینەی ئەو دەگەڕێنێتەوە
Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.
*/

// 2 > 3 || alert("if my left neighbor is falsy, then I will be executed");

/* 
What will the code below output?

alert( alert(1) || 2 || alert(3) );
solution
The answer: first 1, then 2.

alert( alert(1) || 2 || alert(3) );
The call to alert does not return a value. Or, in other words, it returns undefined.

The first OR || evaluates its left operand alert(1). That shows the first message with 1.
The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
There will be no 3, because the evaluation does not reach alert(3).
*/
