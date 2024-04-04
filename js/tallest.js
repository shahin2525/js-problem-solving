const maxNumberInArray = (numbers) => {
  let minNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    if (element < minNumber) {
      minNumber = element;
    }
  }
  return minNumber;
};

const marks = [20, 30, 40, 50];
const maximumMarks = maxNumberInArray(marks);
console.log(maximumMarks);
