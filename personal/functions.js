function add(a, b) {
  return a + b;
}
// console.log(add(2, 3));

const add2 = () => {
  return 6;
};
// console.log(add2());

//pure function arrow regular
//factory function
function car(name) {
  return {
    name: name,
    brand: "toyo",
    engineStart: function () {
      console.log("started");
    },
  };
}
// console.log(car("innova").engineStart());
// console.log(car("etios"));

//constructor function

// function car2() {
//   this.name = "name";
//   this.brand = "maruti";
// }

// let swift = new car2()
// console.log(swift)
//iife immediate invocation function
// (async function (){console.log("hey it'sme")})()

// const add = function (){

// }
//decorator function
