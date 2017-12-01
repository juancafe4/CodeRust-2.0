let partition = function(arr, low, high) {
  let pivot_value = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (i <= high && arr[i] <= pivot_value) {
      i++;
    }

    while (arr[j] > pivot_value) {
      j--;
    }

    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    } else {
      break;
    }
  }

  arr[low] = arr[j];
  arr[j] = pivot_value;
  return j;
}

let quick_sort_rec = function(arr, l, h) {
  if (l < h) { // Recursive case
    let pivot_index = partition(arr, l, h);
    quick_sort_rec(arr, l, pivot_index - 1);
    quick_sort_rec(arr, pivot_index + 1, h);
  }
}
let quick_sort = function(arr) {
  quick_sort_rec(arr, 0, arr.length - 1);
  return arr;
}
console.log(quick_sort([55, 23, 26, 2, 18, 78, 23, 8, 2, 3]));
console.log(quick_sort([1, 1, 1, 1]));
console.log(quick_sort([40, 34, 23, 1]));


