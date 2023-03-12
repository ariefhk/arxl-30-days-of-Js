import { name, age, isMale, haveBf, haveLambo, myAddr } from "./variabel.js";

let isString = typeof name;
let isNumber = typeof age;
let isBoolean = typeof isMale;
let isUndefined = typeof haveBf;
let isNull = typeof haveLambo;
let isObject = typeof myAddr;

export {
  isString,
  isNumber,
  isBoolean,
  isUndefined,
  isNull,
  isObject,
  isArray,
};
