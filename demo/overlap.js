const array =[[1,2],[4,5],[1,4]]

function overlap(a){
    let counter = 0
    let prev =0
    array.sort((a,b)=> a[1]-b[1])
    for(let i=1;i<a.length;i++){
        // let currenrt = 
        if(a[i][0]<a[prev][1]){
            counter++
        }else{
            prev=i
        }
    }
    return counter
}
console.log(overlap(array))
// array.sort((a,b)=> console.log(a,b))