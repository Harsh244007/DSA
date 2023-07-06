const array = [5, 4, 3, 6, 7, 1];

function selection(a) {
  for (let i = 0; i < a.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[minimum]) {
        minimum = j;
      }

      [a[i], a[minimum]] = [a[minimum], a[i]];
    }
  }

  return a;
}
console.log(selection(array));
