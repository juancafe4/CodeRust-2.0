const factorial = function(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  let fact = 1;
  while (n > 0) {
    fact *= n;
    n--;
  }

  return fact;
}

let result = []
const fimd_kth_permutation = function(vector, k, result) {
//   if (!vector || vector.length === 0) {
//     return;
//   }
//   let n = vector.length;
//   let fact = factorial(n - 1);

//   let selected = Math.floor((k - 1) / fact);
//   result.push(vector[selected]);
//   vector.splice(selected, 1);

//   k = k - (selected * fact);

//   fimd_kth_permutation(vector, k, result);

  while (vector && vector.length) {
    let n = vector.length;
    let fact = factorial(n - 1);

    let selected = Math.floor((k - 1) / fact);
    result.push(vector[selected]);
    vector.splice(selected, 1);

    k = k - (selected * fact);
  }
}



let res = [];

fimd_kth_permutation([1, 2, 3, 4], 8, res);

console.log(res);

res = [];
fimd_kth_permutation([1, 2, 3, 4, 5, 6], 6, res);

console.log(res);
