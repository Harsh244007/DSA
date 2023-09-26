console.log(add((data) => console.log(data, "argument")));
function add(a=4) {
  a(5)
  a(8)
  return a()
}
