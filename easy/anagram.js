/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let string1 = str1.toLowerCase().trim();
  let string2 = str2.toLowerCase().trim();



  if(string1.length !== string2.length){
    return false;
  }
  else{
    let stringObj = {};
    for(let char of string1){
      stringObj[char] = (stringObj[char] || 0) + 1;
    }

    for(let char of string2){
      if(stringObj[char]){
        stringObj[char]--;
      }
      else{
        return false;
      }
    }
   
    return true;
  }
}

module.exports = isAnagram;
