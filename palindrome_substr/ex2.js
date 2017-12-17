const is_palindrome = function(str , j, k) {
  let couunt = 0;
  while (j >= 0 && k < str.length) {
    
    if (str[j] !== str[k]) {
      break;
    }
    console.log(str.substring(j, k+1));

    k++;
    j--;
    couunt++
  }

  return couunt;
}

const palindrom_substr = function(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count += is_palindrome(str, i - 1, i + 1); // ODD palindrome
    count += is_palindrome(str, i, i + 1); // EVEN palindrome
  }

  return count;
}

console.log(palindrom_substr('aabbbaa'));
console.log(palindrom_substr('aaaaaa'));

