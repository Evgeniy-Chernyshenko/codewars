function getMiddle(s) {
  let start, end;
  if (s.length % 2) {
    start = Math.floor(s.length / 2);
    end = start + 1;
  } else {
    start = s.length / 2 - 1;
    end = start + 2;
  }

  return s.slice(start, end);
}
