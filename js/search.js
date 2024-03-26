const lyrics = "tomi bondu kala pakhI";
const searchString = "pakhI";
const doesExists = lyrics
  .toLocaleLowerCase()
  .includes(searchString.toLocaleLowerCase());
// if (lyrics.indexOf(searchString) !== -1) {
//   console.log("exists");
// } else {
//   console.log("It does not find");
// }

// console.log(lyrics.startsWith(searchString));
console.log(lyrics.endsWith(searchString));
