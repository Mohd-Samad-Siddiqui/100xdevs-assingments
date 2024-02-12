/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  if(str.length == 0){
    return true;
  }
  else{
    let stringCopy = str.split(' ').join('').toLowerCase();
    for(let i=0; i<stringCopy.length; i++){
      if(97 <= stringCopy.charCodeAt(i) && stringCopy.charCodeAt(i) <= 122){
        continue;
      }
      else{
        stringCopy = stringCopy.replace(stringCopy.charAt(i), '');
      }
    }
    console.log(stringCopy);

    for(let i=0; i<stringCopy.length; i++){
      let charFromStart = stringCopy.charAt(i);
      let charFromEnd = stringCopy.charAt(stringCopy.length - (1+i));
      console.log(`${charFromStart} ${charFromEnd}`);
      if(charFromEnd !== charFromStart){
        return false;
      }
    }
  }
  return true;
}

module.exports = isPalindrome;
