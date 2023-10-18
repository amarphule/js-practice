const accountId = 1234;
let accountName = "Amardeep";
var accountEmail = "amardeep@gmail.com";
let accountDescription;
accountAddress = "Pune";

// accountId = 1212
// console.log(accountId); // not allowed

console.table([accountId, accountName, accountEmail, accountAddress, accountDescription])

/**
 * variable name start with $, special char, string
 * variable name does not start with number
 * 
 * 1. const 
 *      - value can not be change i.e cant assign different value
 *      - const variable always need initialise value
 *      - block scope
 * 
 * 2. let
 *      - can be declared and initialise later
 *      - assign different value
 *      - block scope
 * 
 * 3. var
 *      - can be declared and initialise later
 *      - assign different value
 *      - functional scope
 * 
 * if variable doesn't have any keyword(let, const, var) then it is in global scope
 * if variable name only declared using let and var then it contains Undefined value
 */