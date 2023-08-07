const obj = {
  id: 1,
  gender: "male",
};
const obj2 = Object.create(obj, {});
obj2.gender = undefined;
console.log(obj2);
delete obj.gender;

console.log(obj);
