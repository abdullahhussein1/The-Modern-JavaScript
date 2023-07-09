"use strict";
// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
// It’s used to assign default values to variables
/* let user;
alert(user ?? "anonymous"); //anonymous (user is undefined)

user = "Muhammed";
alert(user ?? "anonymous"); //Muhammed (user is not null/undefined)

let firstName = null;
let lastName = null;
let nickName = null;

alert(firstName ?? lastName ?? nickName ?? "anonymous");
//in this example we can replace ?? with OR operator (||)
alert(firstName || lastName || nickName || "anonymous"); //same result as above(not for all time)
 */
//difference between || and ??
// || returns the first truthy value.
// ?? returns the first defined value.

/* 
In practice though, we may want to use default value only when the variable is null/undefined. That is, when the value is really unknown/not set.
For example, consider this:
*/
let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0
// In practice, the zero height is often a valid value, that shouldn’t be replaced with the default. So ?? does just the right thing.

// alert(height ?? 100||10); // Parsing error: Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses
