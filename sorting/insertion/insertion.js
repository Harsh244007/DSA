function insertion(arr) {
  if (arr.length == 0) return arr

  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i] //[1] arr[1] == 1
    let j = i - 1 //[0] arr[0]==6 which is more then 1
    while (j >= 0 && arr[j] > cur) { // j is not - and 6 is >1
      arr[j + 1] = arr[j] // swap 6 with 1 current i with i-1 so [6,6,2,3,4,5]
      j-- // j-- so it will become 0
    }
    arr[j+1]=cur //curent element which is 1 so it will be 
  }
  return arr
}
let arra = [6, 1, 2, 3, 4, 5]
const sort = insertion(arra)
console.log(sort)
