const moveZeros = (arr) =>
  arr
    .reduce(
      (a, c) => (c !== 0 ? [[...a[0], c], a[1]] : [a[0], [...a[1], c]]),
      [[], []]
    )
    .reduce((a, c) => [...a, ...c], []);
