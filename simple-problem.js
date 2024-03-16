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
