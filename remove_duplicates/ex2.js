let replaceAt = function(str, index, character) {
  return str.substr(0, index) + character + str.substr( index + character.length)
}

const remove_duplicates = function(str) {
  let write_idx = 0;

  for (let read_idx = 0; read_idx < str.length; read_idx++) {
    let found = false;

    for (let j = 0; j < write_idx; j++) {
      if(str[read_idx] === str[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      str = replaceAt(str, write_idx, str[read_idx]);
      write_idx++;
    }
  }
  return str.substr(0, write_idx);
}


console.log(remove_duplicates('aaaaa'));

console.log(remove_duplicates('aaaawwwdwrrr'))