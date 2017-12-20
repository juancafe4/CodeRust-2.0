const all_sum_rec = function(target, current_sum, start, output, result) {
  if (target === current_sum) {
    result.push(output.slice());
    return;
  }

  for (let i = start; i < target; i++) {
    let temp_sum = current_sum + i;
    if ( temp_sum <= target) {
      output.push(i);
      all_sum_rec(target, temp_sum, i, output, result);
      output.pop();
    } else {
      return;
    }
  }
}

const all_sun = function(num) {
  let output = [];
  let result = [];

  all_sum_rec(num, 0, 1, output, result);

  console.log(result);
}

all_sun(32);

// Big O exponential 