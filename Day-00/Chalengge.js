import { name, age, isMale, haveBf, haveLambo, myAddr } from "./variabel.js";

import {
  isString,
  isNumber,
  isBoolean,
  isUndefined,
  isNull,
  isObject,
  isArray,
} from "./datatypes.js";

// 1. Write a single line comment which says, comments can make code readable
// This is a comment

// 2. Write another single comment which says, Welcome to 30DaysOfJavaScript
//Welcome to 30DaysOfJavaScript

// 3. Write a multiline comment which says, comments can make code readable, easy to reuse and informative
/* 
Comment can make code readable, easy to reuse and informative.
*/

// 4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
console.log(name);
console.log(age);
console.log(isMale);
console.log(haveBf);
console.log(haveLambo);
console.log(myAddr);

// 5. Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable
console.log(isString);
console.log(isNumber);
console.log(isBoolean);
console.log(isUndefined);
console.log(isNull);
console.log(isObject);

// 6. Declare four variables without assigning values
let x, y, z, a;

// 7. Declare four variables with assigned values
let numA = 1;
let numB = 2;
let numC = 3;
let numD = 4;

// 8. Declare variables to store your first name, last name, marital status, country and age in multiple lines
let firstName = "Arief Rachman";
let lastName = "Hakim";
let maritalStatus = false;
let country = "Indonesia";
let ageTwo = 21;

// 9. Declare variables to store your first name, last name, marital status, country and age in a single line
let firstName1, lastName1, maritalStatus1, country1, age1;

// 10. Declare two variables myAge and yourAge and assign them initial values and log to the browser console.
/*I am 25 years old.
You are 30 years old. */
let myAge = 21;
let yourAge = 25;
console.log(`I am ${myAge} years old.\nYou are ${yourAge} years old.`);
