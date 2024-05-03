const getTallest = (numbers) => {
  let lowest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const element = numbers[i];

    if (lowest > element) {
      lowest = element;
    }
  }
  return lowest;
};

const numbers = [10, 20, 30, 40];
const tallest = getTallest(numbers);
console.log(tallest);
