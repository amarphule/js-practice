/**
 * 2 types of datatype
 * 
 *      1.Primitive: string, boolean, number, undefined, null, bigint, symbol
 *      2.Non-primitive: array, object, function
 *      
 *      Stack:- copy the value (primitive)
 *      Heap:- copy the reference value (non primitive)
 */

// Primitive (stack memory copy value)
let name = "amar" // String
let age = 18 // number
let isLoggedIn = true // boolean
let bignumber = 10n  // bigInt
let address = null // null
let pin;  // undefined

let id= Symbol("123")   // symbol
let anotherId= Symbol("123")  //symbol

console.log(id === anotherId);  //false


// Non Primitive (heap memory reference value)
let hobby = ["reading", "coding", "writing"]    // object(array)
let user = {
    name: "Amardepp",
    phone: 1212112211
}                                               // object
let myfunction = function(){}

console.log(typeof hobby);
console.log(typeof user);
console.log(typeof myfunction);