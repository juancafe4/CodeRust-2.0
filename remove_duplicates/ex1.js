let replaceAt = function(str, index, character) {
  return str.substr(0, index) + character + str.substr( index + character.length)
}

const remove_duplicates = function(str) {
  let hashset = new Set();

  let read_index = 0;
  let write_index = 0;

  while (read_index < str.length) {
    if (!hashset.has(str[read_index])) {
      hashset.add(str[read_index]);
      str = replaceAt(str, write_index, str[read_index]);
      write_index++;
    }
    read_index++;
  }
  console.log(str);
  console.log(write_index);
  return str.substr(0, write_index);
}

console.log(remove_duplicates('dabbac'));