// check length
let name = "harsh";
let name2 = "hello";
let name3 = "hsrah";

function anagram(str1, str2) {
  if (str1.length != str2.length) return false;
  let count = {};
  for (let i of str1) {
    count[i] = (count[i] || 0) + 1;
  }
  for (let i of str2) {
    if (!count[i]) return false;
    count[i] -= 1;
  }
  return [count, true];
}
console.log(anagram(name, name3));
