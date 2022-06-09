// exports.function binarySearch(num, array) {
exports.binarySearch = function(num, array) {
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
