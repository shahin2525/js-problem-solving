// const friends = ["rakib", "sumon", "rumon"];

// console.log(Array.isArray(friends));

// console.log(friends.includes("sumon2"));

// console.log(friends.indexOf("sumon"));
// const friends2 = ["moni", "joni"];
// const totalFriends = friends.concat(friends2);
// console.log(totalFriends);

const friends = [10, 20, 30, 40, 50];
const partial1 = friends.slice(1, 4);
// console.log(partial1);
const partial2 = friends.splice(1, 2, "rakib", "tamim");
console.log(partial2);
console.log(friends);
