// let x = 1;
// while (x <= 19) {
//   console.log(x);
//   x = x + 2;
// }

// const arr = [10, 20, 30, 40];
// arr[3] = 50;
// arr.push(22);
// arr.push(24);
// arr.pop();

// console.log(arr);

arr2 = [10, 20, 30, 40, 44];
// for (let age of arr2) {
//   console.log(age);
// }

// for (let i = 0; i < arr2.length; i++) {
//   const age = arr2[i];
//   console.log(age);
// }

// const getMuiltiply = (num1, num2, num3) => {
//   const result = num1 * num2 * num3;
//   return result;
// };
// const num1 = 5;
// const num2 = 5;
// const num3 = 5;
// const multiplay = getMuiltiply(num1, num2, num3);
// console.log(multiplay);

const myObj = { name: "rakib", age: 20, profession: "student" };
// for (let key in myObj) {
//   console.log(key);
// }
// const keys = Object.entries(myObj);
// console.log(keys);

// for (let key in myObj) {
//   console.log(`keys:${key} values:${myObj[key]}`);
// }
// const keys = Object.keys(myObj);
// keys.forEach((key) => {
//   console.log(`keys:${key} values:${myObj[key]}`);
// });

// console.log(keys);

function getUpperEighty(numbers) {
  let upper = [];
  for (let i = 0; i < numbers.length; i++) {
    const result = numbers[i];
    if (result > 80) {
      upper.push(result);
    }
  }
  return upper;
}
const numbers = [10, 708, 102, 55, 70, 505];
const upperEighty = getUpperEighty(numbers);
console.log(upperEighty);
