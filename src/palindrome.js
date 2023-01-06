function isPalindrome(word) {
  let j = word.length - 1;

  //console.log(j);

  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) !== word.charAt(j - i)) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("whatever"));
