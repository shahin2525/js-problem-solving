function getWordsReversed(text) {
  const strWords = text.split(" ");
  let reversed = [];
  for (let i = strWords.length - 1; i >= 0; i--) {
    const element = strWords[i];
    console.log(element, "ele");
    reversed.push(element);
  }
  const reversedJoin = reversed.join(" ");
  return reversedJoin;
}

const text = "i am a good boy";
console.log(getWordsReversed(text));
