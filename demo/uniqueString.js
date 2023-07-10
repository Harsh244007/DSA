function countCharacters(str) {
    const count = {};
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      count[char] = (count[char] || 0) + 1;
    }
  
    return count;
  }
  
  const inputString = "TTTTFF";
  const output = countCharacters(inputString);
  console.log(output);  // Output: { T: 4, F: 2 }
  