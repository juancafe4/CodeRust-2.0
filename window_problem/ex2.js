let find_max_sliding_window = function(arr, window_size) {
  if (window_size > arr.length) {
    return;
  }
  let result = [];
  let window = [];  // linked list
  // Create first window
  for (let i = 0; i < window_size; i++) {
    // delete from the tail numbers that are smaller from the current window
    while (window.length > 0 
      && arr[i] >= arr[window[window.length - 1]]) {
      window.pop();
    }
    window.push(i);
  }

  for (i = window_size; i < arr.length; i++) {
    // delete from the tail numbers that are smaller from the current window
    while (window.length > 0 
      && arr[i] >= arr[window[window.length - 1]]) {
      window.pop();
    }

    // Remove first number if it doesn't fail in the window anymore
    if (window.length > 0 && window[0] <= i - window_size) {
      window.shift();
    }
    window.push(i);
    result.push(arr[window[0]]);
  }

  return result;
}

console.log(find_max_sliding_window([-4, 2, 7, 3, 6], 3));