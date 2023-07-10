let string = "babad";
let string2 = "cbbd";
let string3 = "TTTTTTFFFF";
function longestpalindrome(s, numRows) {
  let size = s.length;
  let left = 0;
  let answer = 0;
  let count = 0;

  for (let i = 0; i < size; i++) {
    if (s[i] == "F") {
      count++;
    }
    while (count > numRows) {
      if (s[left] == "F") {
        count--;
      }
      left++;
    }
    answer = Math.max(i - left + 1, answer);
  }

  count = 0;
  left = 0;
  for (let i = 0; i < size; i++) {
    if (s[i] == "T") {
      count++;
    }
    while (count > numRows) {
      if (s[left] == "T") {
        count--;
      }
      left++;
    }
    answer = Math.max(i - left + 1, answer);
  }
  return answer;
}

// console.log(longestpalindrome(string));
// console.log(longestpalindrome(string2));
console.log(longestpalindrome(string3, 4));
