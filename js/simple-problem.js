const inchToFeet = (inch) => {
  const feet = inch / 12;
  return feet;
};

const myInch = 100;
const myFeet = inchToFeet(myInch);
//
const milesToKm = (miles) => {
  const km = miles * 1.609344;
  return km;
};

const myMilesDistance = 2;
const myKmDistance = milesToKm(myMilesDistance);
// console.log(myKmDistance);

const peterNumberIsEven = (number) => {
  const even = number % 2;
  if (even === 0) {
    return true;
  } else {
    return false;
  }
};
const petersNumber1 = 98;
const petersNumber2 = 117;
const petersNumber = peterNumberIsEven(petersNumber2);

// leaf year
const isLeapYear = (year) => {
  const isLeapYear = year % 4;
  if (isLeapYear === 0) {
    return "leap year", true;
  } else {
    return "leap year", false;
  }
};

const year = 2025;
const leapYear = isLeapYear(year);
// console.log(leapYear);

// calculate sum of all number of array

const sumNumberOfArray = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum += element;
  }
  return sum;
};
const numbers = [10, 15, 20, 25, 60];
const totalArrayNumber = sumNumberOfArray(numbers);

// console.log(totalArrayNumber);

// const getOddNumbersOfAnArray = (numbers) => {
//   let oddNumbers = [];
//   for (i = 1; i < numbers.length; i++) {
//     const element = numbers[i];
//     if (element % 2 !== 0) {
//       oddNumbers.push(element);
//     }
//   }
//   // console.log(oddNumbers);
//   return oddNumbers;

//   // const odd = number % 2 != 0;
//   // return odd;
// };

const getEvenNumbersOfAnArray = (numbers) => {
  let evenNumbers = [];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;

    const element = numbers[index];

    if (element % 2 !== 0) {
      evenNumbers.push(element);
    }
  }
  // for (let i = 0; i < evenNumbers.length; i++) {
  //   const element = evenNumbers[i];
  //   sum += element;
  // }
  return evenNumbers;
};

const numbers2 = [10, 11, 12, 13, 14];
// const oddNumber = getOddNumbersOfAnArray(numbers2);
const evenNumbers = getEvenNumbersOfAnArray(numbers2);
const totalSum = sumNumberOfArray(evenNumbers);
// console.log(totalSum);

// const factorial = (number) => {
//   let result = 1;
//   for (let i = number; i >= number; i++) {
//     result = result * i;
//   }
//   return result;
// };

// const number = 4;
// const factorialNumber = factorial(number);
// console.log(factorialNumber);

// const factorial = (number) => {
//   for (let i = 1; i <= number; i++) {
//     console.log(i);
//   }
// };

// const factNumber = 3;
// const fact = factorial(factNumber);
// console.log(fact);

// const numberFacto = 3;
// const getFactorial = factorial(numberFacto);
// console.log(getFactorial);

// const factorial2 = (number) => {
//   for (let i = number; i >= 1; i--) {
//     console.log(i);
//   }
// };
// const factNumber = 5;
// const fact = factorial2(factNumber);
// console.log(fact);

// const factorial = (number) => {
//   let num = 1;
//   let result = 1;
//   while (num <= number) {
//     result = num * result;
//     num++;
//   }

//   return result;
// };

// const factNumber = 3;
// const fact = factorial(factNumber);
// console.log(fact);

const factorial = (number) => {
  let i = number;
  let result = 1;
  while (i >= 1) {
    console.log(i);
    result = result * i;
    i--;
  }
  return result;
};

const factNumber = 5;
const fact = factorial(factNumber);
console.log(fact);
