var largestDifference = function (data) {
  let maxDist = 0;

  data.forEach((num1, i1) => {
    data.forEach((num2, i2) => {
      if (num1 > num2 || i2 <= i1) {
        return;
      }

      const dist = i2 - i1;
      maxDist = dist > maxDist ? dist : maxDist;
    });
  });

  return maxDist;
};
