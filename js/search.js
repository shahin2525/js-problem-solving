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
// console.log(lyrics.endsWith(searchString));
const parts1 = lyrics.split("");
const parts2 = lyrics.split(" ");
const parts3 = lyrics.split(".");
const parts4 = lyrics.slice(5, 8);
const parts5 = lyrics.substring(5, 8);
console.log(parts5);
