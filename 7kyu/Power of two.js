function isPowerOfTwo(n) {
  if (n === 1) return true;

  for (let i = 2; i <= n; i *= 2) {
    if (i === n) return true;
  }

  return false;
}
