// encapsulation
//abstraction
//inheritance
//polymorphism

// class
// function
// object

//encapsulation
// function age() {
//     return 26;
//   }

//   var zjhscvjh
// var planet = {
//   name: "earth",
//   age:age
// };

// const age = ()=>{
//     return 28
// }
// console.log(planet, planet.age);

//abstraction
// const car = {
//   name: "innvoa",
//   engine: function (version) {
//     if (version == 1) return `version 1.0 blue with ${this.name}`;
//     else if (version == 2) return `version 2.0 red ${this.name}`;
//     else return `version prime black ${this.name}`;
//   },
// };
// const car2 = {
//     name: "innvoa",
//     engine: function (version) {
//         if (version == 1) return `version 1.0 blue with ${this.name}`;
//         else if (version == 2) return `version 2.0 red ${this.name}`;
//         else return `version prime black ${this.name}`;
//       }
//   };
// console.log(car2.engine(1))
// console.log(car2.engine(2))
// console.log(car2.engine(3))
//inheritance
// const toyota={
//     brand:"toyota"
// }
// const innova =Object.assign({},toyota)
// const etios =Object.assign({},toyota)
// innova.engine="v 1.3"
// etios.engine="v 1.0"
// console.log(innova,etios)
// const toyota={
//     brand:"toyota"
// }
//polymorphism
const toyota = {
  brand: "toyota",
  engine: "v 1.2",
};
const toyotaSpecialEdiotion = {
  brand: "toyota",
  engine: "v 1.0",
};
const innova = { ...toyota, engine: "v1.0" };
const etios = Object.assign({}, toyotaSpecialEdiotion);
etios.engine="v 1.0"
console.log(innova, etios);
