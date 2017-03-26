/* Return an array consisting of the largest number from each 
provided sub-array. For simplicity, the provided array will contain 
exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop,
 and access each member with array syntax arr[i].*/

function largestOfFour(arr) {
  // You can do this!
var largest = 0;
var largest1 = 0;
var largest2 = 0;
var largest3 = 0;
var largestArr = [];
    for (var j = 0; j < arr[0].length; j++){
    	if (largest < arr[0][j]) {
  	  	largest = arr[0][j];
      }
  	}
  for (j = 0; j < arr[1].length; j++){
    if (largest1 < arr[1][j]){
      largest1 = arr[1][j];
    }
  }
  for (j = 0; j < arr[2].length; j++){
    if (largest2 < arr[2][j]){
      largest2 = arr[2][j];
    }
  }
    for (j = 0; j < arr[3].length; j++){
    if (largest3 < arr[3][j]){
      largest3 = arr[3][j];
    }
    }
  largestArr.push(largest, largest1, largest2, largest3);
  return largestArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);