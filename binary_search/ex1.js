let binary_search = function(A, key) {
  return binary_search_rec(A, key, 0, A.length - 1);
}

let binary_search_rec = function(A, key, low, high) {
  if (low > high) {
    return -1;
  }
  let mid = Math.floor((low + high) / 2);

  if (A[mid] === key) {
    return mid;
  }

  if (key > A[mid]) {
    return binary_search_rec(A, key, mid + 1 , high)
  } else {
    return binary_search_rec(A, key, low, mid - 1);
  }
}


console.log(binary_search([4, 5, 8, 9, 10], 8));
console.log(binary_search([4, 5, 8, 9, 10], 1));
console.log(binary_search([4, 5, 8, 9, 10], 10));
console.log(binary_search([4, 5, 8, 9, 10], 4));
