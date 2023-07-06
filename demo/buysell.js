// const a=[3,1,5,6,7,8]
const a= [7,1,5,3,6,4]

function besttime(arr){
    let total=0
    for(let i=1;i<arr.length;i++){
if(arr[i]>arr[i-1]){
    total+=arr[i]-arr[i-1]
    // console.log(total)
}
    }
    return total
}
console.log(besttime(a))