function palindrome(str) {
  // Good luck!
  var allLower = str.toLowerCase();
  var fixedString = allLower.replace(/[\W\_]/g, '');
  var array = fixedString.split('');
  var reversed = array.reverse();
  var newString = reversed.join('');
  
  if (fixedString === newString) {
    return true;
  }
 return false;
}



palindrome("0_0 (: /-\ :) 0-0");