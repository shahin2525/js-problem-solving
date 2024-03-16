const inchToFeet = (inch) => {
  const feet = inch / 12;
  return feet;
};

const myInch = 100;
const myFeet = inchToFeet(myInch);

const milesToKm = (miles) => {
  const km = miles * 1.609344;
  return km;
};

const myMilesDistance = 2;
const myKmDistance = milesToKm(myMilesDistance);
console.log(myKmDistance);
