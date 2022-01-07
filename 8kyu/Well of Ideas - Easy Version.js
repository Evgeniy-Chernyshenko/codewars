function well(x) {
  const goodIdeasCount = x.filter((idea) => idea === 'good').length;

  if (goodIdeasCount > 2) {
    return 'I smell a series!';
  }

  if (goodIdeasCount > 0) {
    return 'Publish!';
  }

  return 'Fail!';
}
