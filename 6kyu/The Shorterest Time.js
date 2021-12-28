function shorterestTime(n, m, speeds) {
  if (n === 0) {
    return 0;
  }

  const elevatorDistance = n > m ? n - m : m - n;

  const options = [
    n * speeds[3],
    elevatorDistance * speeds[3] +
      speeds[1] +
      speeds[2] +
      m * speeds[0] +
      speeds[1],
    elevatorDistance * speeds[0] +
      speeds[1] +
      speeds[2] +
      n * speeds[0] +
      speeds[1],
  ];

  return Math.min(...options);
}
