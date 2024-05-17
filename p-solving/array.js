// const friends = ["rakib", "sumon", "rumon"];

// console.log(Array.isArray(friends));

// console.log(friends.includes("sumon2"));

// console.log(friends.indexOf("sumon"));
// const friends2 = ["moni", "joni"];
// const totalFriends = friends.concat(friends2);
// console.log(totalFriends);

// const friends = [10, 20, 30, 40, 50];
// const partial1 = friends.slice(1, 4);
// // console.log(partial1);
// const partial2 = friends.splice(1, 2, "rakib", "tamim");
// console.log(partial2);
// console.log(friends);

// const numbers = [10, 20, 30, 10, 20, 30, 2, 3];

// const checkDuplicate = (numbers) => {
//   let unique = [];
//   for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (unique.includes(number) === false) {
//       unique.push(number);
//     }
//   }
//   return unique;
// };

// const duplicate = checkDuplicate(numbers);
// console.log(duplicate);

// const numbers = [10, 20, 30, 10, 20, 30, 3, 40, 5];
// const getDuplicate = (numbers) => {
//   const unique = [];
//   for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (unique.includes(number) === false) {
//       unique.push(number);
//     }
//   }
//   return unique;
// };

// const getUnique = getDuplicate(numbers);
// console.log(getUnique);
// for (let i = 0; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("foobar");
//   } else if (i % 3 != 0 && i % 5 != 0) {
//     console.log("foobarShow");
//   } else if (i % 3 === 0) {
//     console.log("foo");
//   } else if (i % 5 === 0) {
//     console.log("bar");
//   } else {
//     console.log(i);
//   }
// }

const getTotal = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "please provide number";
  }
  return num1 + num2;
};

const total = getTotal(8, 10);
console.log(total);
