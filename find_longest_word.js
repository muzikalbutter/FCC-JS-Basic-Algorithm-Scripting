function findLongestWord(str) {
  var array = str.split(" ");
  var length = 0;
  for (i = 0; i < array.length; i++) {
    if (length <= array[i].length) {
      length = array[i].length;
    }
  }
  return length;
}

findLongestWord("May the force be with you");