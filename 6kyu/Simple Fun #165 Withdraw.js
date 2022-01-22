function withdraw(n) {
  let d20 = 0;
  let d50 = 0;
  let d100 = 0;

  while (n % 50 !== 0) {
    n -= 20;
    d20++;
  }

  if (n !== 0) {
    d100 = Math.floor(n / 100);
  }

  if (n % 100 !== 0) {
    d50 = 1;
  }

  return [d100, d50, d20];
}
