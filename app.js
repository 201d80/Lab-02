'use strict';

let someData = prompt("Pick a number");

someData = parseInt(someData);


// oops, forget to run the code that sets someData


let resultFromTypeOf = typeof (someData);

console.log('resultFromTypeOf = ', resultFromTypeOf);

let doubled = someData + someData;

console.log('doubled', doubled);

console.log(typeof (doubled));