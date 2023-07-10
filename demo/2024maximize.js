let string = "babad";
let string2 = "cbbd";
let string3 = "paypalishiring";
function longestpalindrome(s,numRows) {
if(numRows==1 ||s.length <numRows) return s
let direction = false
let count = 0

let arr = new Array(numRows).fill("")

for(let i=0;i<s.length;i++){
    let current = s[i]
    arr[count]+=current
    if(count===0 || count>= numRows-1) direction= !direction
    direction?count++:count--
}
return arr.join("")
}

// console.log(longestpalindrome(string));
// console.log(longestpalindrome(string2));
console.log(longestpalindrome(string3,4));
