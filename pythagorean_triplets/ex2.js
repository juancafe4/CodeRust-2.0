const find_pythagorean_triplets = function(arr) {
  let n = arr.length;
  arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < n; i++) {
    let c = arr[i] * arr[i];

    let j = 0;
    let k = n - 1;

    while (j < k) {
      if (j === 0 || j === i) {
        j++;
      }

      if (k === 0 || k === i) {
        k--;
      }

      let a = arr[j] * arr[j];
      let b = arr[k] * arr[k];

      if (a + b == c) {
        console.log(arr[j], arr[k], arr[i]);
        break;
      }
      if (a + b - c > 0) {
        k--;
      }

      if (a + b - c < 0) {
        j++;
      }
    }
  }
}

find_pythagorean_triplets([4, 16, 1, 2, 3, 5, 6, 8, 25, 10]);
find_pythagorean_triplets([4, 6, 10, 5, 8,25]);

// O(n^2)
