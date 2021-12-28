function sc(screws) {
  return screws.split('').reduce((totalTime, screw, i) => {
    const switchTime = i && screw !== screws[i - 1] ? 5 : 0;
    const moveTime = !!i ? 1 : 0;

    return totalTime + moveTime + switchTime + 1;
  }, 0);
}
