function isPalindrome(word) {
  let letters = word.split('')
  letters.reverse()
  let newWord = letters.join('')
  return word === newWord
}

/* 
  split word into array of letters
  reverse array
  join array of letters into new word

  return truthiness of word equals new word
*/

/*
  isPalindrome takes a string as an argument and checks to see if the string is a palindrome.
  It checks this by:
    1. Reversing the string by:
      a. Splitting the string into an array of letters
      b. Reversing the array
      c. Joining the array into a new string
    2. Comparing the original string with the new string to see if they are equal
  It returns the truthiness of the equality statement. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"))
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("bat tab"))
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("chess"))

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
