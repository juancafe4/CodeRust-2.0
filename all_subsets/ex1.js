const get_bit = function(num, bit) {
  let temp = 1 << bit; // MASK to mark respective index
  temp = temp & num; //  See if it matches the right index

  if (temp === 0) {
    return 0;
  }

  return 1;
}

const all_subsets = function(vector, sets) {
  let num_combinations = Math.pow(2, vector.length);

  for (let i = 0; i < num_combinations; i++) {
    let set = new Set();

    for (let j = 0; j < vector.length; j++) {
      if (get_bit(i, j)) {
        set.add(vector[j]);
      }
    }

    sets.push(set);
  }
  
}
let sets = [];
console.log(all_subsets([2, 5, 7], sets));

console.log(sets);

sets = [];
console.log(all_subsets([4, 5, 7, 8, 12, 16, 45, 1, 1, 1, 23], sets));

console.log(sets);

