const inchToFeet = (inch) => {
  const feet = inch / 12;
  return feet;
};

const myInch = 100;
const myFeet = inchToFeet(myInch);
console.log(myFeet);
