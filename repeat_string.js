/* Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is not a positive number.*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  var string = '';
  if (num > 0){
    for (var i = 0; i < num; i++)
      string += str;
  }
  return string;
}

repeatStringNumTimes("abc", 3);
//should return "abcabcabc"
repeatStringNumTimes("*", 3); 
//should return "***"
repeatStringNumTimes("abc", 4); 
//should return "abcabcabcabc"
repeatStringNumTimes("abc", 1);
//should return "abc"
repeatStringNumTimes("*", 8);
//should return "********"
repeatStringNumTimes("abc", -2);
//should return ""