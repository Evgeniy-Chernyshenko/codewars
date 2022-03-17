var number = function (busStops) {
  return busStops.reduce((a, c) => a + c[0] - c[1], 0);
};
