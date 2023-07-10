function bubble(arr) {
  for (let i = arr.length; i > 0; i--) {
    let flag = false
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
      flag = true
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    if (!flag) break
  }
  return arr
}
let arra = [6, 1, 2, 3, 4, 5]
const sort = bubble(arra)
console.log(sort)
