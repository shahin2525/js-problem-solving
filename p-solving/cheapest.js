const phones = [
  {
    name: "walton",
    price: 1000,
    storage: "12gb",
    camera: "10px",
  },
  {
    name: "xiomi",
    price: 2000,
    storage: "16gb",
    camera: "10px",
  },
  {
    name: "realme",
    price: 14000,
    storage: "20gb",
    camera: "10px",
  },
  {
    name: "vivo",
    price: 22000,
    storage: "32gb",
    camera: "10px",
  },
];

const getCheapestPhones = (phones) => {
  const cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
};
const cheapestPhones = getCheapestPhones(phones);
console.log(cheapestPhones);
