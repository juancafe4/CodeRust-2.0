// add to the set and substract from the target if th result exist in
// the set we found its pair and return true
let sum_of_values = function(arr, target) {
  let table = new Set();

  for (let a of arr) {
    if (table.has(target - a)) {
      return true;
    } else {
      return false;
    }
  }
}