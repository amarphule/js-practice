// console.log(5>3); 
// console.log(5<3);
// console.log(5/3);
// console.log(5*3);
// console.log(5%3);
// console.log(5**2); // 5 to the power 2

// Comparision always return boolean value (string converted to number)

// console.log("5" > 2);
// console.log(5 < "2");
// console.log("5" >= 5);


/**
 * When comparing null to numeric values, null is generally treated as 0, and the comparisons follow the standard rules for
 * numeric values. So, the first and second comparisons are false, and the third comparison is true.
 */
console.log(null > 0);   // 0 > 0 false
console.log(null == 0);  // null == 0 false
console.log(null >= 0);  // 0 >= 0  true


/**
 *  All of these comparisons involving undefined and numeric values will result in false because undefined is treated as NaN in
 *  numeric comparisons, and NaN is never considered greater than, equal to, or greater than or equal to any numeric value.
 */
console.log(undefined > 0);    // NaN > 0 false
console.log(undefined == 0);   // NaN == 0 false
console.log(undefined >= 0);   // NaN >= 0 false


console.log("2" === 2); // false -  check datatype with value