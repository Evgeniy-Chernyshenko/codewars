function comp(a1, a2) {
  try {
    a1.sort((a, b) => a - b);
    a2.sort((a, b) => a - b);
  } catch (e) {
    return false;
  }

  if (a1.length !== a2.length) {
    return false;
  }

  return a1.every((el, i) => el ** 2 === a2[i]);
}
