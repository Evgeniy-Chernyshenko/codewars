function dutyFree(normPrice, discount, hol) {
  const discountAmount = normPrice * (discount / 100);
  const coverCount = Math.floor(hol / discountAmount);

  return coverCount;
}
