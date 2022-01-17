const prevMultOfThree = (n) => {
  if (n % 3 === 0) {
    return n;
  }

  const withReplaceLastDigit = Math.floor(n / 10);

  if (withReplaceLastDigit === 0) {
    return null;
  }

  return prevMultOfThree(withReplaceLastDigit);
};
