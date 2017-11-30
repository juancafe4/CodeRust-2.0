let reverse_array = function (A, start, end) {
  // use  indexes on range cause you are swpaping the items YOU DO NOT WANT UNDEFINED
  while (start < end) {
    let temp = A[start];
    A[start] = A[end];
    A[end] = temp;
    start++;
    end--;
  }
}

let rotate_array = function(A, n) {
  let len = A.length;

  // If n  is large than the array length ---> NORMALIZE
  n = n % len;

  // If n is negative 
  if (n < 0) {
    n = n + len;
  }

  reverse_array(A, 0, len - 1);
  reverse_array(A, 0, n - 1);
  reverse_array(A, n, len - 1);

  return A;
}

console.log(rotate_array([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 2));
console.log(rotate_array([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], -1));
console.log(rotate_array([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 11));
console.log(rotate_array([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 22));

