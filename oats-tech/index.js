function stars(number = 3) {
  let sumChar = [];
  let char = "*";
  for (let i = number; i >= 0; i--) {
    let blankArr = [];

    blankArr.push(" ");
    console.log("Output : ", sumChar);
    sumChar.replace("*");
  }
}
// stars(3);
// *
// **
// ***
// Team Oats Tech
// 6:42 PM
// https://1.bp.blogspot.com/-wj9Xz8Jd-DY/X3jc7J0sy7I/AAAAAAAAAs4/R5wjUP2-9t8_9OVBw5hvOTFfICy1j8LkgCNcBGAsYHQ/s0/Mirrored_Triangle_Star_Pattern.png
// Team Oats Tech
// 6:53 PM
// Promise.resolve('Success!')
//   .then(data => {
//     return data.toUpperCase()
//   })
//   .then(data => {
//     console.log(data)
//     return data
//   })
//   .then(console.log)
let x = 5;
let arr = [1, 2, 3, 4];
manipulator(x, arr);
console.log(x, arr);


function manipulator(a, b) {
 	a = 10;
 	b[0] = 50;
}
// async foo() {
//             const user = 	db.fetchUser(1);
//             return user;
// }

// Const bar = foo();
// What will be stored in `bar`?