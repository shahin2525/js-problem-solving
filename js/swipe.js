let num1 = 5;
let num2 = 8;
console.log("first", num1, num2);

const third = num1;
num1 = num2;
num2 = third;
// [
// console.log("first", first1, second2);
//  //
// [

//   (first1, second2)
// ] = [second2, first1];
// console.log("sec", first1, second2);
//   (num1, num2)
// ] = [num2, num1];

console.log("sec", num1, num2);
