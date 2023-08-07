// var doubleType = 87;

// doubleType.concat("jh")
// console.log(doubleType)

// const person = {
//     name : "jaxghc",
//   };

function addition(a, b = 9) {
  return a + b;
}

function addition1(a, b) {
  return a + b;
}
console.log(addition(5, 8));
console.log(addition(5));
console.log(addition1(5, 8));
