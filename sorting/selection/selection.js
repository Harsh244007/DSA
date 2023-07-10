const array = [5, 4, 3, 6, 7, 1];

function selection(a) {
  for (let i = 0; i < a.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < a.length; j++) {
      // let swap = false;
      // console.log(a, i,j,"before");
      if (a[j] < a[minimum]) {
        minimum = j;
        // swap = true;
      }
      // if (swap) 
      [a[i], a[minimum]] = [a[minimum], a[i]];
      console.log(a, i,j,"after");
    }
  }

  return;
}
console.log(selection(array));
