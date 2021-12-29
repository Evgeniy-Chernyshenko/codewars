bonus = function (arr, s) {
  const maxAbsentDays = Math.max(...arr);
  const coefs = arr.map((absentDays) => maxAbsentDays / absentDays);
  const coefsSum = coefs.reduce((a, c) => a + c, 0);
  const onePieceOfBonuses = s / coefsSum;

  return coefs.map((coef) => Math.round(coef * onePieceOfBonuses));
};
