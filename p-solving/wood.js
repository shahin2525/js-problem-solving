const getWoodRequirements = (chairQuantity, tableQuantity, bedQuantity) => {
  const perChairWood = 3;
  const perTableWood = 5;
  const perBedWood = 50;

  const chairWoods = perChairWood * chairQuantity;
  const tableWoods = perTableWood * tableQuantity;
  const bedWoods = perBedWood * bedQuantity;
  const totalWoods = chairWoods + tableWoods + bedWoods;
  return totalWoods;
};
const chairQuantity = 3;
const tableQuantity = 2;
const bedQuantity = 2;
const totalWoods = getWoodRequirements(
  chairQuantity,
  tableQuantity,
  bedQuantity
);
console.log(totalWoods);
