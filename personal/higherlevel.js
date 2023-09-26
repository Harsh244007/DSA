function makereq(loc){
    return new Promise((resolve,reject)=>{
        console.log("making requeting now")
        if(loc=="1") resolve("hi")
        else reject(":hello")
    })
}
function proceereq(response){
    return new Promise((e,d)=>{
        e("new")
    })
}