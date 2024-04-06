const getReversString = (text) => {
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    console.log(element);
  }
};
const string = "I am a good boy";
const getString = getReversString(string);
