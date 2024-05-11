const shoppingCart = [
  { name: "shirt", price: 200 },
  {
    name: "pant",
    price: 500,
  },
  {
    name: "shoes",
    price: 800,
  },
];

const getTotalPrice = (products) => {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    sum = sum + product.price;
  }
  return sum;
};
const totalPrice = getTotalPrice(shoppingCart);
console.log(totalPrice);
