function squareSum(numbers) {
  return numbers.reduce((a, c) => {
    return a + Math.pow(c, 2);
  }, 0);
}
