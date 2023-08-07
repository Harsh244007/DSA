"use strict";
const a = "ahgs";
const chris = {
    age: 20,
    gender: null,
    name: "harsh",
    alive: true,
};
const sunny = {
    name: "sunny",
    alive: true,
};
const user = {
    name: "harsh",
    age: 20,
};
//array
const array = [1, 2, 3, 4, 5, 6];
//typescript inferance it checkec array and set as
// array.push("6");
const array2 = [1, 2, 3, 4, 5, 6];
//typescript inferance it checkec array and set as
array2.push("6");
//functions
//function add (a,b)
function add(a, b) {
    return a + b;
}
add("1", "2");
//void keyword if no return
function log(message) {
    return console.log(message);
}
log("hello");
log("123");
//generics when you don't know what you will return but you will return something
function returnData(data) {
    return new Array().concat(data);
}
returnData([1, 2, 3]);
function returnData2(data) {
    return new Array().concat(data);
}
returnData2([1, 2, 3]);
returnData2([1, 2, "3"]);
returnData2([1, 2, "3"]);
