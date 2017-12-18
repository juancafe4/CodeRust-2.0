const interger_division = function(dividend, divisor) {
  let sum = divisor;
  let count = 0;

  while (sum <= dividend) {
    sum += divisor;
    count++;
  }

  return count;
}


console.log(interger_division(24, 3));
console.log(interger_division(1000, 5));
