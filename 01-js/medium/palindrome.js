/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[\s\W_]+/g, '');
  let n = Math.floor(str.length / 2);
  let n1 = str.length;
  console.log(str);
  for (let i = 0; i < n; i++) {
    if (str[i] != str[n1 - i - 1]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
