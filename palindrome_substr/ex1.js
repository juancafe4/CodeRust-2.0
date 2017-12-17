const is_palindrom = function(str, i, j) {
  while (i < j) {
    if (str[i] !== str[j]) {
      return false
    }
    i++;
    j--;
  }

  return true;
}

const palindrom_substr = function(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (is_palindrom(str, i, j)) {
        console.log(str.substring(i, j + 1));
        counter++;
      }
    }
  }

  return counter;
}

console.log(palindrom_substr('aabbbaa'));