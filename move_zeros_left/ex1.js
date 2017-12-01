let move_zeros_to_left = function(arr) {
  let write = arr.length - 1;
  let read = arr.length - 1;

  // If read equals to zero move read if not move read but first assign value where write is 
  // and decrease write
  while (read >= 0) {
    if (arr[read] !== 0) {
      arr[write] = arr[read];
      write--;
    } 
    read--
  }

  while (write >= 0) {
    arr[write--] = 0;
  }

  console.log(arr);
}

move_zeros_to_left([1, 10, 20, 0, 59, 63, 0, 88, 0]);
move_zeros_to_left([0, 1, 5, -2, 0]);
move_zeros_to_left([0, 0, 5, -2, 3]);
