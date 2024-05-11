const shoppingCart = [
  { name: "shirt", price: 200, quantity: 2 },
  { name: "pant", price: 500, quantity: 3 },
  { name: "shoes", price: 300, quantity: 2 },
];

const getTotalPrice = (products) => {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productsTotal = product.price * product.quantity;
    sum = sum + productsTotal;
  }
  return sum;
};
const totalPrice = getTotalPrice(shoppingCart);
console.log(totalPrice);
