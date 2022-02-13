function getScore(n) {
  let res = 0;

  for (let i = 1; i <= n; i++) {
    res += i * 50;
  }

  return res;
}

console.log(getScore(1));
console.log(getScore(2));
console.log(getScore(3));
console.log(getScore(4));
console.log(getScore(5));
