let search_roated_array = function(A, key) {
  let low = 0;
  let high = A.length - 1;


  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (A[mid] === key) {
      return mid;
    }
    if (A[low] <=  A[mid]) {
      if (key <= A[mid] && key >= A[low]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if(A[mid] < A[high]) {

      if (key <= A[high] && key >= A[mid]) {        
        low = mid + 1;
      } else {        
        high = mid - 1;
      }
    }
  }
  return -1;
}

console.log(search_roated_array(
  [176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162],
  176));

console.log(search_roated_array(
  [176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162],
  162));

console.log(search_roated_array(
  [176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162],
  20));

console.log(search_roated_array(
  [176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162],
  243));