function insertion(arr) {
  if (arr.length == 0) return arr

  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j+1]=cur
  }
  return arr
}
let arra = [6, 1, 2, 3, 4, 5]
const sort = insertion(arra)
console.log(sort)
