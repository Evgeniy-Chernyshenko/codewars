function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  const endPosition = walk.reduce(
    (currentPosition, direction) => {
      if (direction === 'n') currentPosition[0]++;

      if (direction === 's') currentPosition[0]--;

      if (direction === 'w') currentPosition[1]--;

      if (direction === 'e') currentPosition[1]++;

      return currentPosition;
    },
    [0, 0]
  );

  return endPosition[0] === 0 && endPosition[1] === 0;
}
