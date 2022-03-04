function digital_root(n) {
  let res = 0;

  while (n > 0) {
    res += n % 10;
    n = Math.floor(n / 10);
  }

  return res / 10 < 1 ? res : digital_root(res);
}
