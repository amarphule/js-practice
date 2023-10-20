const percent = 100
const actualPercent = new Number(100)

// console.log(percent);  // define number type at run time
// console.log( actualPercent); // guarented number type

let decimalNumber = 100.39344
console.log(decimalNumber.toFixed(2));
console.log(decimalNumber.toPrecision(4));

let readableNumber = 1000000
console.log(readableNumber.toLocaleString());
console.log(readableNumber.toLocaleString('en-IN'));

// define Range
// random value between 10 and 20
const min = 10
const max = 20
console.log(Math.floor((Math.random()* (max-min+1))+min));