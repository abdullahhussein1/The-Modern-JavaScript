"use strict";
// -_-_-_-_-_-_-_-_-_-task 1-_-_-_-_-_-_-_-_-_-

/* 
Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
Show it using alert.
*/
// let date = new Date(2012, 1, 20, 3, 12);
// console.log(date);

// -_-_-_-_-_-_-_-_-_-task 2-_-_-_-_-_-_-_-_-_-
/* 
Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

For instance:

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );    
*/

/* function getWeekDay(date) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[date.getDay()];
}

let date = new Date(2012, 0, 3); // 3 Jan 2012
console.log(getWeekDay(date)); */

// -_-_-_-_-_-_-_-_-_-task 3-_-_-_-_-_-_-_-_-_-
/* 
function getDateAgo(date, days) {
  let newDate = new Date(date);
  newDate.setDate(date.getDate() - days);
  return newDate.getDate();
}

let date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));
console.log(date);
 */

// -_-_-_-_-_-_-_-_-_-task 4-_-_-_-_-_-_-_-_-_-

/* 
Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

Parameters:

year – four-digits year, for instance 2012.
month – month, from 0 to 11.
For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).
*/

/* function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2016, 1)); */

// -_-_-_-_-_-_-_-_-_-task 5-_-_-_-_-_-_-_-_-_-
/* 
Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

For instance, if now were 10:00 am, and there was no daylight savings shift, then:

getSecondsToday() == 36000 // (3600 * 10)
The function should work in any day. That is, it should not have a hard-coded value of “today”.
 */
/* function getSecondsToday() {
  let today = new Date().setHours(0, 0, 0, 0);
  return Math.round((new Date() - today) / 1000);
}

console.log(getSecondsToday());
 */

// -_-_-_-_-_-_-_-_-_-task 6-_-_-_-_-_-_-_-_-_-

/* Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

For instance, if now is 23:00, then:

getSecondsToTomorrow() == 3600
P.S. The function should work at any day, the “today” is not hardcoded.
 */
/* function getSecondsToTomorrow() {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  return Math.round((tomorrow - new Date()) / 1000);
}

console.log(getSecondsToTomorrow()); */

// -_-_-_-_-_-_-_-_-_-task 7-_-_-_-_-_-_-_-_-_-
/*
Write a function formatDate(date) that should format date as follows:

 If since date passed less than 1 second, then "right now".
Otherwise, if since date passed less than 1 minute, then "n sec. ago".
Otherwise, if less than an hour, then "m min. ago".
Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.
For instance:

alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) ); */

function formatDate(date) {
  let now = new Date();
  let diff = (date - now) / 1000;
  if (diff < 1) {
    return "right now";
  } else if (diff < 1 * 60) {
    return `${Math.round(diff)} sec. ago`;
  } else if (diff < 1 * 60 * 60) {
    return `${Math.round(diff / 60)} min. ago`;
  } else {
    return new Date(date);
  }
}
console.log(new Date() + 2);
console.log(formatDate());
