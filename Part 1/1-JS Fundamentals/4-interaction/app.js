"use strict";
//prompt returning a string inside the textField,but if the user clicks on cancel or esc then will return null instead
let pro = prompt("Please enter your name");
alert(`Welcome ${pro} ^-^`);

//confirm returning true or false, depending on the users clicked button, if ok then will return true and vise versa
let isAdmin = confirm("Are you the administrator?");
isAdmin ? alert("Welcome admin") : alert("welcome hay not admin");
