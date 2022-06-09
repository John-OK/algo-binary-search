var bs = require("./binarySearch");

var smallArray = [1,2,3,4,5]
var largeArray = [1,5,7,2,3,8,4,9]

console.log(bs.binarySearch(1, smallArray) === 0);
console.log(bs.binarySearch(2, smallArray) === 1);
console.log(bs.binarySearch(3, smallArray) === 2);
console.log(bs.binarySearch(4, smallArray) === 3);
console.log(bs.binarySearch(5, smallArray) === 4);
console.log(bs.binarySearch(7, largeArray) === 5);