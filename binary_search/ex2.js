let binary_search = function(A, key) {
  let low = 0;
  let high = A.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (A[mid] === key) {
      return mid;
    }

    if (A[mid] < key) {
      low = mid + 1;
    } else {
      high = high - 1;
    }
  }

  return -1;
}

console.log(binary_search([1, 4, 5, 8, 12, 22], 5));
console.log(binary_search([1, 4, 5, 8, 12, 22], 22));
console.log(binary_search([1, 4, 5, 8, 12, 22], 1));

