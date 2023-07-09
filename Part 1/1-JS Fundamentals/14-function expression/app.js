/* eslint-disable no-unused-vars */
"use strict";
// --------------------------SUMMARY-----------------------------
// A function is a value representing an “action”

//Function Declarations are processed before the code block is executed. They are visible everywhere in the block.

// Function Expressions are created when the execution flow reaches them.

// In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

// So we should use a Function Expression only when a Function Declaration is not fit for the task. We’ve seen a couple of examples of that in this chapter, and will see more in the future.
//----------------------------------------------------------------
/* //function decleration
function showSalam(func) {
  confirm("are you admin") ? func() : alert("you are not admin");
}

//function expression
let showSalaam = function () {
  alert("Salaamu Alaikum Admin");
};

showSalam(showSalaam); */
// -----------------------------CALLBACK-----------------------------------

function ask(question, accept, reject) {
  confirm(question) ? accept() : reject();
}
/* 
// ---------------------------first way-------------------------------------

const showAccept = function () {
  alert("you accepted the question");
};

const showReject = function ()  {
  alert("you rejected the question");
};

ask("Are you Admin?", showAccept, showReject);
 
// ---------------------------second-------------------------------------

ask(
  "Are you Admin?",
  function yes() {
    alert("yes");
  },
  function no() {
    alert("no");
  }
);
*/
