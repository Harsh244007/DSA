const f = (cb) => {
    console.log(cb(),"called at 2")
  setTimeout(() => {
    cb({ name: "apple", type: "fruit" });
  }, 3000);
};
let x;
// f((data) => (x = data));
// console.log(x); // undefined

const g = async () => {
  try {
    const result = await new Promise(async (resolve, reject) => {
      return await f((data) => { console.log(data,"at13")
      resolve(data)});
    });
    return result;
  } catch (e) {
    console.log("error");
  }
};

(async () => {
  x = await g();
  console.log(x, "line no 25");
})();
