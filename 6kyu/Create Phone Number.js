function createPhoneNumber(numbers) {
  return numbers
    .join('')
    .replace(/(.{3})(.{3})(.{4})/, (_, p1, p2, p3) => `(${p1}) ${p2}-${p3}`);
}
