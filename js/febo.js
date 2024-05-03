const febo = [0, 1];
for (let i = 2; i <= 10; i++) {
  febo[i] = febo[i - 1] + febo[i - 2];
}
console.log(febo);
