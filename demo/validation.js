let string = "({})}"
let string1 = "(())"

function validate(a){
    if(a[0]==")" ||a[0]=="]" ||a[0]=="}" || a.length == 1 || a.length % 2 !=0){
        return false
    }
    let stack =[]
    for (let i=0;i<a.length;i++){
        if(a[i]=="("||a[i]=="{"||a[i]=="["){
            stack.push(a[i])
        }else{
            let prev = stack.pop()
            if(prev=="(" && a[i]!=")") return false
            if(prev=="[" && a[i]!="]") return false
            if(prev=="{" && a[i]!="}") return false
            if(prev==undefined && a[i]) return false
        }
    }
    return true 

}
console.log(validate(string))
console.log(validate(string1))