const myArr = [1,2,3,4,5]
const myarr2 = [6,7,8,9]

// mehtods that manupulate existing array

// myArr.push(6, 7,10)    // add element at last
// myArr.pop()      // remove element from last
// myArr.unshift(0) // add element at first
// myArr.shift()    // remove element from first
// console.log(myArr);

// let newArr = myArr.concat(myarr2) // returns new array with all elements
// console.log(newArr);

// const splicedArr = myArr.splice(1,3)
// console.log(splicedArr);
// console.log(myArr);

// slice does not manipulate original array
const slicedArr = myArr.slice(1,3)
console.log(slicedArr);
console.log(myArr);