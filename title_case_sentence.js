/* Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words 
like "the" and "of".*/

function titleCase(str) {
  var allLower = str.toLowerCase();
  var array = allLower.split(" ");
  var newString = '';
  
  for (i = 0; i < array.length; i++) {
    var upperLetters = array[i][0].toUpperCase();
    var lowerLetters = array[i].substring(1, array[i].length);
    newString = newString + ' ' + upperLetters + lowerLetters;
    
  }
  var correctString = newString.trim();
  return correctString;
  
}

titleCase("I'm a little tea pot");
//should return a string.
titleCase("I'm a little tea pot");
//should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt");
//should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
//should return "Here Is My Handle Here Is My Spout".