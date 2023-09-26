function mirrorTriangle(number = 3) {
    for (let i = 1; i <= number; i++) {
      let stars= "";
  
      for (let j = 1; j <= number - i; j++) {
        stars += " ";
      }
  
      for (let k = 1; k <= i; k++) {
        stars+= "*";
      }
      console.log("Mirror Triangle : ",stars);
    }
  }
  mirrorTriangle(3);


Promise.resolve("Success!")
  .then((data) => {
    return data.toUpperCase();
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .then(console.log);


let x = 5;
let arr = [1, 2, 3, 4];
manipulator(x, arr);
console.log(x, arr);

function manipulator(a, b) {
  a = 10;
  b[0] = 50;
}
