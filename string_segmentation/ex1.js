let string_segmentation_rec = function(str, dic, solved) {
  for (let i = 1; i < str.length; i++) {
    let first = str.substr(0, i);

    if (dict.has(first)) {
      let second = str.substr(i);
      if (second.length === 0) {
        return true;
      }
      if (dict.has(second)) {
        return true;
      }

      if (!solved.has(second)) {
        if (string_segmentation_rec(second, dic, solved)) {
          return true;
        }
      }

      solved.add(second);
    }
  }

  return false;
}
let string_segmentation = function(str, dict) {
  let solved = new Set();
  return string_segmentation_rec(str, dict, solved);
}



let dict = new Set();
dict.add('hello');
dict.add('hell');
dict.add('on');
dict.add('now');

console.log(string_segmentation('hellonow', dict));
console.log(string_segmentation('hellonownow', dict));
console.log(string_segmentation('hellobye', dict));

