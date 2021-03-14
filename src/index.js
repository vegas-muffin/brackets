module.exports = function check(str, bracketsConfig) {
  let map = new Map();
  var arr = [];
  var openBracket = [];
  var closeBracket = [];
  for (let i=0; i<bracketsConfig.length; i+=1) {
    map.set(bracketsConfig[i][1],bracketsConfig[i][0]);
    openBracket.push(bracketsConfig[i][0]);
    closeBracket.push(bracketsConfig[i][1]);
  }
  for(let s=0; s<str.length; s+=1) {
    if (openBracket.indexOf(str[s]) !== -1 && closeBracket.indexOf(str[s]) !== -1) {
      if (arr[arr.length-1] === str[s]) {
        arr.pop();
      } else {
        arr.push(str[s]);
      }
    } else {
      if (openBracket.indexOf(str[s]) !== -1) {
        arr.push(str[s]);
      } else {
        var lastel = arr[arr.length-1];
        if (map.get(str[s]) === lastel) {
          arr.pop();
        } else {
          return false;
        }
        
      }
    }
  }
  if (arr.length === 0) {
    return true;
  }
  return false;
}
