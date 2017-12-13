const replaceAt = function(str, index, char) {
  return str.substr(0, index) + char + str.substr(index + char.length);
}
const remove_spaces = function(str) {
  if (!str || !str.length) {
    return;
  }
  let write_idx = 0;
  for (let read_idx = 0; read_idx < str.length; read_idx++) {
    if (str[read_idx] != ' ' && str[read_idx] != '\t') {
      str = replaceAt(str, write_idx, str[read_idx]);
      write_idx++;
    }
  }

  return str.substr(0, write_idx);
}

console.log(remove_spaces(' All greek to me. '));