const getDiscountPrice = (productQuantity) => {
  const first100price = 100;
  const second100price = 90;
  const third100price = 70;
  if (productQuantity <= 100) {
    const price = productQuantity * first100price;
    return price;
  } else if (productQuantity <= 200) {
    const first100 = 100 * first100price;
    const restProductQuantity = productQuantity - 100;
    const restPrice = restProductQuantity * second100price;
    const totalPrice = first100 + restPrice;
    return totalPrice;
  } else {
    const first100 = 100 * first100price;
    const second100 = 100 * 90;
    const third100 = first100 + second100;
    const restProductQuantity = productQuantity - 200;

    const restPrice = restProductQuantity * 70;
    const totalPrice = third100 + restPrice;
    return totalPrice;
  }
};
const discountPrice = getDiscountPrice(202);
console.log(discountPrice);
