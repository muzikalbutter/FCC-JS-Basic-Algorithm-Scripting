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