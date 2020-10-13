module.exports = function check(str, bracketsConfig) {
  let left = [];
  let right = [];
  let arr = [];
  let brackets = bracketsConfig.toString().split(',');
  for (let i=0; i<brackets.length; i++) {
      if (i % 2 == 0) {
          right.push(brackets[i]);
      } else if (i % 2 != 0) {
          left.push(brackets[i]);
      } 
  }
  for (j=0; j<str.length; j++) {
      if (right.includes(str[j])) {
          arr.push(str[j]);
      } else if (left.indexOf(str[j]) === right.indexOf(arr[arr.length-1])) {
          arr.pop();
      } else {
         return false;
      }
  }
 return arr.length === 0;
}
