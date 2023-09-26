
// const profileCall = new Promise((resolve, reject) => {
//   setTimeout(() => {

//     resolve("recorded profileCall");
//   }, 1000);
//     // reject("reject profileCall")

// });
// Promise.allSettled([profileCall, cartCall])
//   .then((e) => console.log("promise all settled: ", e))
// .catch((e) => console.log(e));

// Promise.race([profileCall, cartCall])
//   .then((e) => console.log("promise all race: ", e))
//   .catch((e) => console.log("promise all race rejected: ", e));

// const recordv31 = new Promise((resolve, reject) => {
//   reject("recorded 31");
// });
// const recordv4 = new Promise((resolve, reject) => {
//   resolve("recorded 4");
// });
// const recordv5 = new Promise((resolve, reject) => {
//   resolve("recorded 5");
// });

// console.log("hello1");
// apicall()
// console.log("hello2");
// Promise.all([profileCall, cartCall])
//   .then((e) => console.log("promise all rejected false: ", e))
//   .catch((e) => console.log("promise all rejected true: ", e));

// const cartCall = new Promise((resolve, reject) => {
//   resolve("recorded cartCall");

//   // reject("reject cartCall")
// });

// function word(location) {
//   // const apiresoponse = fetch("someapi");
//   return new Promise((resolve, reject) => {
//     if (location == "a") {
//       resolve("done reolved");
//     } else {
//       reject(`rejected ${location}`);
//     }
//   });
// }

// console.log("before callking this ");
// const re = word("aa1")
//   .then((e) => console.log(e))
//   .catch((e) => console.log(e));
// console.log(re);

// console.log(word("aa2"));

// console.log(word("aa3"));

// console.log(word("aa"));

const recordv1 = new Promise((resolve, reject) => {
  reject("recorded rejct")

});

recordv1.then((e) => console.log("single promise", e)).catch((e)=>console.log(e));
