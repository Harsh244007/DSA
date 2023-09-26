const response = () => {
  // fetch("")
};
response();

// console.log("hello2");

const f = (cb) => {
  setTimeout(() => {
    cb({ name: "apple", type: "fruit" });
  }, 3000);
};
let x;
f((data) => (x = data));
console.log(x); // undefined

async function fn(e){

    const result =  new Promise((resolve,reject)=>{
        if(e=='')
        resolve('')
    })
    // result.then().catch((e)=>)
}