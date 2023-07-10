let string = "babad";
let string2 = "cbbd";

function longestpalindrome(s) {
  let accumulator = "";
  function palindrome(str, left, right) {
    while (left >= 0 && right < str.length && str[left] == str[right]) {
      left--;
      right++;
    }
    
    console.log(str,left,right)
    return str.slice(left + 1, right);
  }
  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = palindrome(s, i, i);
    let evenPalindrome = palindrome(s, i, i + 1);

    let longestPalindrome =
      evenPalindrome.length > oddPalindrome.length
        ? evenPalindrome
        : oddPalindrome;

    if (longestPalindrome.length > accumulator.length) {
      accumulator = longestPalindrome;
    }
  }
  return accumulator;
}

console.log(longestpalindrome(string));
// console.log(longestpalindrome(string2));
