const find_missing_number = function(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  let n = arr.length + 1;

  real_sum = Math.floor((n * (n + 1)) / 2);

  return real_sum - sum;  
}


console.log(find_missing_number([1, 5, 4, 3]));
console.log(find_missing_number([3, 7, 1, 2, 8, 4, 5]));
