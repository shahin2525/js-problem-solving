// const nayok = {
//   name: "sakib khan",
//   id: "16a",
//   act: function () {
//     console.log("acting like sakib khan");
//   },
//   movies: [
//     { name: "no 1", year: 2025 },
//     { name: "king khan", year: 2026 },
//   ],
// };
// console.log(nayok.act());
const products = [
  { name: "samsung phone", releaseYear: 2015, price: 12000 },
  { name: "lenovo phone", releaseYear: 2015, price: 12000 },
  { name: "xiomi Phone", releaseYear: 2015, price: 12000 },
  { name: "oppo Phone", releaseYear: 2015, price: 12000 },
  { name: "vivo phone", releaseYear: 2015, price: 12000 },
];

const matchPhone = (phones, search) => {
  let match = [];
  for (const phone of phones) {
    if (phone.name.toLowerCase().includes(search.toLowerCase())) {
      match.push(phone);
    }
  }
  return match;
};

const result = matchPhone(products, "phone");
console.log(result);
