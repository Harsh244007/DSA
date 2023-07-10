let string = "harsh";
let string2 = "sunny";

function substring(s) {
    let accumulator = []
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let substr = "";
      for (let k = i; k <= j; k++) {
        substr = substr + s[k];
      }
      console.log(substr)
      accumulator.push(substr)
    }
  }
  return accumulator
}

console.log(substring(string).join("\n"));
// console.log(substring(string2).join("\n"));
