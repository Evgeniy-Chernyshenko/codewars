function sabb(s, val, happiness) {
  const word = 'sabbatical';

  const includesCharsCount = s
    .toLowerCase()
    .split('')
    .reduce((a, c) => (word.includes(c) ? a + 1 : a), 0);

  return includesCharsCount + val + happiness > 22
    ? 'Sabbatical! Boom!'
    : 'Back to your desk, boy.';
}
