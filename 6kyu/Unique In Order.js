const uniqueInOrder = (iterable) => {
  const splitted = Array.isArray(iterable) ? iterable : iterable.split("");

  return splitted.reduce(
    (a, c, i, arr) => (arr[i - 1] === c ? a : [...a, c]),
    []
  );
};
