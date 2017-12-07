let replaceAt = function(str, index, character) {
  return str.substr(0, index) + character + str.substr( index + character.length)
}
let rev_str = function(str, start, end) {
  if (!str || str.length < 2) {
    return;
  }

  while (start < end) {
    let temp = str[start];
    str = replaceAt(str, start, str[end]);
    str = replaceAt(str, end, temp);

    start++;
    end--;
  }
  return str;
}

let reverse_words = function(str) {
  if (!str || !str.length) {
    return;
  }

  sentence = rev_str(str, 0, str.length - 1);

  let start = 0;
  let end = 0;
  while(true) { 
    // Check if start is on empty space
    if (sentence[start] === ' ') {
      start++;
    }

    // If start is greater than the sentence length we re done!
    if (start >= sentence.length) {
      break;
    }

    // Skip white spaces if there is one 
    end = start + 1;
    // Step forward end until you reach an empty space 
    while (end < sentence.length && sentence[end] !== ' ') {
      end++;
    }

    sentence = rev_str(sentence, start, end - 1);
    start = end;
  }

  return sentence;
}


console.log(reverse_words('Hello World'));