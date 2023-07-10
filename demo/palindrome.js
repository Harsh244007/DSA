let string = "babad";
let string2 = "bab";
function palindrome(s) {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] != s[s.length - 1 - i]) {
      // here we are dividing string in half and checking if left part is same as right part or not
      return false;
    }
  }
  return true;
}

console.log(palindrome(string) ? "It's palindrome" : "It's NOT a palindrome");
console.log(palindrome(string2) ? "It's palindrome" : "It's NOT a palindrome");
