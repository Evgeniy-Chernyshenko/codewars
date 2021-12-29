function findOdd(A) {
  return +Object.entries(
    A.reduce((a, c) => {
      if (!a[c]) {
        a[c] = 1;
      } else {
        a[c]++;
      }

      return a;
    }, {})
  ).find(([_, count]) => count % 2 !== 0)[0];
}
