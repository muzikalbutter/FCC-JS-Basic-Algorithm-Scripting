function reverseString(str) {
  var array = str.split('');
  var reversed = array.reverse();
  var newString = reversed.join("");
  return newString;
}

reverseString("hello");