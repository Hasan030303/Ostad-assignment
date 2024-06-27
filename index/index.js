function calculateSum(a,b){
    return a+b;
}
function isEven(a){
    if(a%2==0) return true;
    else return false;
}
function findMax(arr) {
    return Math.max(...arr);
  }
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  function filterOddNumbers(arr) {
    return arr.filter(number => number % 2 !== 0);
  }