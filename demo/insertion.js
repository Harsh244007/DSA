var a = [7, 5, 6, 2, 4, 1]

function insertion(arr) {
  for (i = 1; i < arr.length; i++) {
    let cur = arr[i]
    let previous = i - 1
    while (previous >= 0 && arr[previous] > cur) {
      arr[previous + 1] = arr[previous]
      previous--
    }
    arr[previous + 1] = cur
  }
  return arr
}
console.log(insertion(a))
