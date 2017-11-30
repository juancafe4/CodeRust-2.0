let low_index = function(A, key) { // Focused on getting the high value when mid <= key and return low
  let low = 0; 
  let high = A.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (A[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  if (A[low] === key) {
    return low;
  }

  return - 1;
}

let high_index = function(A, key) { // Focused on getting the low value when mid >= key and return high
  let low = 0;
  let high = A.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (A[mid] > key) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  if (A[high] === key) {
    return high;
  }

  return - 1;
}


let find_low_high_index = function(A, key) {
  console.log(low_index(A, key));
  console.log(high_index(A, key));
}


find_low_high_index([1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 20], 5);

