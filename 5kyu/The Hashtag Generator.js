function generateHashtag(str) {
  const clearStr = str.trim(' ').replace(/\s+/, ' ');

  if (!clearStr.length) {
    return false;
  }

  const hashTag =
    '#' +
    clearStr
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join('');

  return hashTag.length > 140 ? false : hashTag;
}
