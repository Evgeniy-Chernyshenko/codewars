function getScore(n) {
  let res = 0;

  for (let i = 1; i <= n; i++) {
    res += i * 50;
  }

  return res;
}
