let hashMap = {};
var encode = function (longUrl) {
  const code = Math.random().toString(32).slice(5);
  console.log(code)
  const tinyUrl = `https://tinyurl.com/${code}`;
  hashMap[tinyUrl]= longUrl;
  return tinyUrl;
};

var decode = function (shortUrl) {
  return hashMap[shortUrl];
};
console.log(encode("https://leetcode/problems/ghhg"))
console.log(hashMap)
// console.log(decode("https://leetcode/problems/ghhg"))