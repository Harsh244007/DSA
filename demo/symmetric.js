function longestSymmetric(string) {
    let start = 0;
    let mid = 0;
    let lastGt = 0;
    let end = 0;
    let best = 0;
  
    while (start < string.length) {
      let current = Math.min(mid - start, end - mid);
  
      if (best < current) {
        best = current;
      }
  
      if (end - mid === current && end < string.length) {
        if (string[end] === '?') {
          end += 1;
        } else if (string[end] === '>') {
          end += 1;
          lastGt = end;
        } else {
          end += 1;
          mid = end;
          start = Math.max(start, lastGt);
        }
      } else if (mid < string.length && string[mid] === '?') {
        mid += 1;
      } else if (start < mid) {
        start += 1;
      } else {
        start = Math.max(start, lastGt);
        mid += 1;
        end = Math.max(mid, end);
      }
    }
  
    return 2 * best;
  }
  
  // Test cases
  console.log(longestSymmetric('?????'));     // Output: 4
  console.log(longestSymmetric('??????'));    // Output: 4
  console.log(longestSymmetric('<><??>>'));  // Output: 6
  console.log(longestSymmetric('<<?'));      // Output: 0
  