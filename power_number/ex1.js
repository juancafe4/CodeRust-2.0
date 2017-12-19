const power_rec = function(x, n) {
  if (n === 1) {
    return x;
  }

  if (n === 0) {
    return 1;
  }
  
  let temp = power_rec(x, Math.floor(n / 2));

  if (n % 2 === 0) {
    return temp * temp;
  } else {
    console.log(temp);
    return temp * temp * x;
  }
}

const power = function(x, n) {
  let negative  = false;
  // Check if negative
  if (n < 0) {
    negative = true;
    n *= -1;
  }

  let result = power_rec(x, n);

  // Check if negative
  if (negative) {
    result = 1 / result;
  }

  return result;
}



console.log(power(2, 5));
console.log(power(5, 4));
console.log(power(6, 4));
