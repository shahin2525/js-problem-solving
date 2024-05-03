const getStringReversed = (text) => {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    reversed = reversed + element;
  }
  return reversed;
};
const text = "i am a good boy";
const reversString = getStringReversed(text);
console.log(reversString);
