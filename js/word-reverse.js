const getWordsReverse = (str) => {
  const words = str.split(" ");
  let result = [];
  for (let i = words.length - 1; i >= 0; i--) {
    const element = words[i];
    result.push(element);
  }
  const reversed = result.join(" ");
  return reversed;
};
const str = "i am a good boy";
const getWords = getWordsReverse(str);
console.log(getWords);
