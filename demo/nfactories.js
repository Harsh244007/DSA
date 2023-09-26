const array = [
  [5, 19, 8, 1],
  [10, 10],
  [3, 0, 1],
];

for (let items of array) {
  console.log("answer", checkFac(items));
}
function checkFac(A) {
  let totalPol = 0;
  let filters = 0;
// let newMap = new Set
  for (let item of A) {
    totalPol += item;
  }
  let maxPollution = totalPol / 2;
  while (totalPol > maxPollution) {
    let maxPol = 0;
    let maxPolIndex = -1;
    for (let secondItem = 0; secondItem < A.length; secondItem++) {
      if (A[secondItem] > maxPol) {
        maxPol = A[secondItem];
        maxPolIndex = secondItem;
      }
    }
    A[maxPolIndex] /= 2;
    totalPol -= maxPol / 2;
    filters++;
  }
  return filters;
}

