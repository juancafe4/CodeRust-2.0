let find_smallest_common_number = function(a, b , c) {
  let i = 0, j = 0, k = 0;

  while (i < a.length && j < b.length, k < c.length) {
    if (a[i] === b[j] && b[j] === c[k]) {
      return a[i];
    }

    if (a[i] <= b[j] && a[i] <= c[k]) {
      i++;
    } else if (b[j] <= a[i] && b[j] <= c[k]) {
      j++;
    } else if (c[k] <= a[i] && c[k] <= b[j]) {
      k++;
    }
  }

  return -1;
}


console.log(find_smallest_common_number( 
    [-5, -4, -1, 25, 30, 63,64],
    [-1, 4, 5, 6, 7, 8, 50],
    [0, -1, 10, 14]
 ));