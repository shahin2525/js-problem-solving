// function feetToInch(feet) {
//   const inch = feet * 12;
//   return inch;
// }
// const inch = feetToInch(10);
// console.log(inch);

//

// function centimeterToMeter(centimeter) {
//   const meter = centimeter / 100;
//   return meter;
// }
// const meter = centimeterToMeter(200);
// console.log(meter);

//

// const paperRequirements = (firstBook, secondBook, thirdBook) => {
//   const firstBookPage = 100;
//   const secondBookPage = 200;
//   const thirdBookPage = 300;
//   const firstBookTotalPage = firstBook * firstBookPage;
//   const secondBookTotalPage = secondBook * secondBookPage;
//   const thirdBookTotalPage = thirdBook * thirdBookPage;
//   const totalBookPage =
//     firstBookTotalPage + secondBookTotalPage + thirdBookTotalPage;
//   return totalBookPage;
// };
// const firstBookFigure = 2;
// const secondBookFigure = 3;
// const thirdBookFigure = 4;

// const TotalPapers = paperRequirements(
//   firstBookFigure,
//   secondBookFigure,
//   thirdBookFigure
// );
// console.log(TotalPapers);

// const bestFriend = (friends) => {
//   let i = 0;
//   let maxName = [0];
//   while (i < friends.length) {
//     const name = friends[i];
//     // console.log(name);
//     if (name.length > maxName.length) {
//       maxName = name;
//     }
//     i++;
//   }

//   return maxName;
// };
// const friends = ["rakib", "tamima", "rofiqul", "eiameen munshi"];
// const bestFriendName = bestFriend(friends);
// console.log(bestFriendName);

const onlyPositive = (numbers) => {
  let positive = [];
  for (i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // console.log(number);
    if (number < 0) {
      break;
    }
    positive.push(number);
  }
  return positive;
};
const numbers = [10, 5, 20, 25, -5, 16, 18];
const getPositive = onlyPositive(numbers);
console.log(getPositive);
