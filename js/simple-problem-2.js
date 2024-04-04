// let a = 10;
// let b = 20;
// let c = b;
// b = a;
// a = c;
// console.log(a, b);

// const jimMarks = 69;
// const dellaMarks = 97;
// const chinkuMarks = 99;
// if (jimMarks > dellaMarks && jimMarks > chinkuMarks) {
//   console.log("jim will get delicious cake");
// } else if (dellaMarks > jimMarks && dellaMarks > chinkuMarks) {
//   console.log("della will get delicious cake");
// } else {
//   console.log("chinku will get delicious cake");
// }

const maxNumber = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
};

const maxNumber2 = (num1, num2, num3) => {
  return Math.min(num1, num2, num3);
};

const jimMarks = 69;
const dellaMarks = 97;
const chinkuMarks = 99;

const getMaxNumber = maxNumber2(jimMarks, dellaMarks, chinkuMarks);
console.log(getMaxNumber);
