function binarySearch(num, array){
  array.sort();
  let lower = 0;
  let middle = Math.floor(array.length / 2);
  let upper = array.length - 1;

  while (lower <= upper) {
    let middle_val = array[middle];
    if (num == middle_val) {
      return middle;
    } else if (num > middle_val) {
      lower = middle + 1;
      middle = Math.floor((upper - lower) / 2) + lower;
    } else {
      upper = middle - 1;
      middle = Math.floor((upper - lower) / 2) + lower;
    }
  }

  return -1
}

var smallArray = [1,2,3,4,5]
var largeArray = [1,5,7,2,3,8,4,9]

console.log(binarySearch(1, smallArray) === 0);
console.log(binarySearch(2, smallArray) === 1);
console.log(binarySearch(3, smallArray) === 2);
console.log(binarySearch(4, smallArray) === 3);
console.log(binarySearch(5, smallArray) === 4);
console.log(binarySearch(7, largeArray) === 5);
