const is_pythagorean_triplets = function(a, b, c) {
  const sqr_a = a * a;
  const sqr_b = b * b;
  const sqr_c = c * c;

  if (sqr_a + sqr_b === sqr_c || sqr_b + sqr_c === sqr_a
    || sqr_a + sqr_c === sqr_b) {
    return true;
  }
  return false;
}

const find_pythagorean_triplets = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (is_pythagorean_triplets(arr[i], arr[j], arr[k])) {
          console.log(arr[i], arr[j], arr[k]);
        }
      }
    }
  }
}

find_pythagorean_triplets([4, 16, 1, 2, 3, 5, 6, 8, 25, 10]);

// O(n^3)