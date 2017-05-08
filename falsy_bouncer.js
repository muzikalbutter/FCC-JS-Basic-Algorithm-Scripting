/*Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function isTrue(value) {
    if (value !== false && value !== null && value !== 0 && value !== "" && value !== undefined && isNaN(value)){
      return value;
    }
  }
  var bounced = arr.filter(isTrue);
  return bounced;
}

bouncer([7, "ate", "", false, 9]); //should return [7, "ate", 9].
bouncer(["a", "b", "c"]); //should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]); //should return [].
bouncer([1, null, NaN, 2, undefined]); //should return [1, 2].