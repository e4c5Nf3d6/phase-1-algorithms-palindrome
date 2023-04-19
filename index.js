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
  isPalindrome takes a string in as an argument and checks to see if the string is a palindrome.
  It checks this by reversing the string and comparing the original string with the reversed string to see if they are equal.
  It reverses the string by splitting it into an array of letters and reversing the array then rejoining the array into a string.
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
