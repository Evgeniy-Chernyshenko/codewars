function sumIntervals(intervals) {
  const cloneIntervals = JSON.parse(JSON.stringify(intervals));

  cloneIntervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  for (i = 0; i < cloneIntervals.length - 1; ) {
    console.log(cloneIntervals);
    if (cloneIntervals[i][1] >= cloneIntervals[i + 1][0]) {
      cloneIntervals[i + 1] = [
        cloneIntervals[i][0],
        Math.max(cloneIntervals[i][1], cloneIntervals[i + 1][1]),
      ];
      cloneIntervals.splice(i, 1);
      i = 0;
    } else {
      i++;
    }
  }

  return cloneIntervals.reduce((a, c) => a + c[1] - c[0], 0);
}
