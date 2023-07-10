for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

for (var i = 0; i < 5; i++) {
  let number = i 
    setTimeout(() => {
    console.log(i,number);
  }, 0);
}

// i==5 

// (call stack)
// var i = 4004 memory local
// let number = 4005 
// let number = 4006
// let number = 4007 
// let number = 4008
// let number = 4009

 

//    (event loop)  

//     (call queus) 
    
//             (settimout)