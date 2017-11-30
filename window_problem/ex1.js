// Brute Force
let find_max_sliding_window = function(A, size) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < A.length; i++) {
    let subMax = Number.MIN_SAFE_INTEGER;
    for (let j = i; j <= i + size && j < A.length; j++) {
      
      if (subMax < A[j]) {
        subMax = A[j];
      }
    }

    max = Math.max(max, subMax);
  }

  return max;
}

console.log(find_max_sliding_window([-4, 7, -5, 3, 6], 3));
