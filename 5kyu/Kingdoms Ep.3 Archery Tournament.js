function countAndSort(target) {
  const circlesCount = (target.length - 1) / 2 + 1;
  let circles = [];

  for (let circleNum = 0; circleNum < circlesCount; circleNum++) {
    const circleChars = target
      .slice(circleNum, target.length - circleNum)
      .map((circleStr, index, circleRows) =>
        (index === 0 || index === circleRows.length - 1
          ? circleStr.slice(circleNum, circleStr.length - circleNum)
          : circleStr[circleNum] + circleStr[circleStr.length - 1 - circleNum]
        )
          .replace(/\*/g, '')
          .replace(/([A-Z])/g, '$1$1')
          .toLowerCase()
      )
      .join('');
    circles.push(circleChars);
  }

  const arrows = circles.reduce((a, c, i) => {
    for (const circleChar of [...c]) {
      const charScores = i + 1;
      const el = a.find(({ char }) => char === circleChar);
      if (!el) {
        a.push({ char: circleChar, scores: charScores, arrows: 1 });
      } else {
        el.scores += charScores;
        el.arrows += 1;
      }
    }

    return a;
  }, []);

  arrows.sort((a, b) => {
    return a.scores !== b.scores
      ? a.scores - b.scores
      : a.arrows !== b.arrows
      ? b.arrows - a.arrows
      : a.char.localeCompare(b.char);
  });

  return arrows.map(({ char }) => char);
}
