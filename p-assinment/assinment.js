// function cubeNumber(number) {
//   if (isNaN(number)) {
//     return "provide a number";
//   }
//   const result = number * number * number;
//   return result;
// }
// const getCube = cubeNumber("asss");
// console.log(getCube);

// function matchFinder(ast1, ast2) {
//   //   if (typeof ast1 !== "string" && typeof ast2 !== "string") {
//   //     return "provide string";
//   //   }
//   if (typeof ast1 !== "string" || typeof ast2 !== "string") {
//     return "please provide string inputs";
//   }
//   const result = ast1.includes(ast2);
//   return result;
// }
// const getSting = matchFinder(12, "ohn");
// console.log(getSting);

// function sortMaker(arr) {
//   //   let arrElements = [];
//   //   for (i = 0; i < arr.length; i++) {
//   //     const element = arr[i];
//   //     // console.log(element);
//   //     if (element < 0) {
//   //       return "invalid";
//   //     }
//   //     if (arr.indexOf(element) !== arr.lastIndexOf(element)) {
//   //       return "equal";
//   //     }

//   //     arrElements.push(element);
//   //   }
//   //   arrElements.sort((a, b) => b - a);
//   //   return arrElements;
//   let positiveElement = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element < 0) {
//       return "invalid";
//     }
//     if (arr.indexOf(element) !== arr.lastIndexOf(element)) {
//       return "equal";
//     }
//     positiveElement.push(element);
//   }
//   positiveElement.sort((a, b) => b - a);
//   return positiveElement;
// }
// const arr = [3, 3];
// const getSortMaker = sortMaker(arr);
// console.log(getSortMaker);

const findAddress = (obj) => {
  const aspectedProperty = ["street", "house", "society"];

  let objValues = [];
  for (let i = 0; i < aspectedProperty.length; i++) {
    const prop = aspectedProperty[i];
    if (obj.hasOwnProperty(prop)) {
      objValues.push(obj[prop]);
    } else {
      objValues.push("--");
    }
  }
  return objValues.join(", ");
};
const myAddress = {
  street: 10,
  house: "15A",
  society: "Earth Perfect",
};
const getAddress = findAddress(myAddress);
console.log(getAddress);
