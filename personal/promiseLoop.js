const f = (cb) => {
  setTimeout(() => {
    cb({ name: "apple", type: "fruit" });
  }, 3000);
};
let x;
f((data) => (x = data));
console.log(x); // undefined

const g = async () => {
  try {
    return await new Promise((resolve) => {
      f((data) => resolve(data));
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};

(async () => {
  x = await g();
  console.log(x);
})();
