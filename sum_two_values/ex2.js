// First sort and then sum the  lowest to highest 
// if sum less than target increase lowest else highest decrease
let sum_of_values = function(arr, target) {
  arr.sort();
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let sum = arr[i] + arr[j];

    if (sum === target) {
      return true;
    }
    if (sum < target) {
      i ++
    } else {
      j--;
    }
  }

  return false;
}


console.log(sum_of_values([5, 7, 1, 2, 8, 4, 3], 10));
console.log(sum_of_values([5, 7, 1, 2, 8, 4, 3], 19));
console.log(sum_of_values([5, 7, 1, 2, 8, 4, 3], 20));
console.log(sum_of_values([5, 7, 1, 2, 8, 4, 3], 3));


