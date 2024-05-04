// const feetToInch = (feet) => {
//   const convertInch = feet * 30;
//   return convertInch;
// };
// const feet2 = 2;
// const getInch = feetToInch(feet2);
// console.log(getInch);

// const centimeterToMeter = (centimeter) => {
//   const convertMeter = centimeter / 100;
//   return convertMeter;
// };
// const centi20 = 20;
// const getMeter = centimeterToMeter(centi20);
// console.log(getMeter);

// const paperRequirement = (book1, book2, book3) => {
//   const totalPage = book1 + book2 + book3;
//   return totalPage;
// };
// const book1 = 100;
// const book2 = 200;
// const book3 = 300;
// const totalPage = paperRequirement(book1, book2, book3);
// console.log(totalPage);
// const bestFriend = (friends) => {
//   let friendsArray = friends[0].split(",");
//   let bestFriend = friendsArray[0];
//   console.log(bestFriend, "one");
//   for (let i = 0; i < friendsArray.length; i++) {
//     const friend = friendsArray[i];
//     console.log(friend, "two");
//     if (friend.length > bestFriend.length) {
//       bestFriend = friend;
//     }
//   }
//   return bestFriend;
// };
// const friends = ["rakib,tom,nila,moumita"];
// const getBestFried = bestFriend(friends);
// console.log(getBestFried, "three");
// function findLongestName(names) {
//   let longestName = names[0]; // Assume the first name is the longest
//   for (let i = 1; i < names.length; i++) {
//     if (names[i].length > longestName.length) {
//       longestName = names[i]; // Update longestName if a longer name is found
//     }
//   }
//   return longestName;
// }

// // Example usage:
// const namesArray = ["John", "Alice", "Michael", "Elizabeth"];
// const longestName = findLongestName(namesArray);
// console.log("Longest name:", longestName);
const getPositiveNumber = (numbers) => {
  let positives = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number > 0) {
      positives.push(number);
    } else {
      break;
    }
  }
  return positives;
};
const numbers = [10, 0.5, -2, 3, -4, 7];
const positiveNumber = getPositiveNumber(numbers);
console.log(positiveNumber);
