/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count = 0;

    if(str.length == 0){
      return count;
    }
    else{
      let stringCopy = str.trim();
      for(let i=0; i < stringCopy.length; i++){
        let char = stringCopy.charAt(i);
        if('a' === char || 'A' === char || 'e' === char || 'E' === char || 'i' === char || 'I' === char || 'o' === char || 'O' === char || 'u' === char || 'U' === char){
          count += 1;
        }
      }
      return count;
    }
}

module.exports = countVowels;