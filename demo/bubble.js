const arr = [6, 2, 3, 4, 5, 9, 8]

function bubble(arr) {
  for (let i = arr.length; i > 0; i--) {
    let flag = false
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = true
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
      console.log("innner iteration", i, j, arr, flag)
    }
    if (flag == false) {
      break
    }
  }
  return arr
}
// 0(n2)

console.log(bubble(arr))
