function numberOfPairs(gloves) {
  const uniqueColors = new Set(gloves);

  return [...uniqueColors]
    .map((uniqueColor) =>
      Math.floor(
        gloves.filter((gloveColor) => gloveColor === uniqueColor).length / 2
      )
    )
    .reduce((a, c) => a + c, 0);
}
