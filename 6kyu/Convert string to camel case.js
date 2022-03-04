function toCamelCase(str) {
  return str
    .split(/[_-]/)
    .map((w, i) => (i === 0 ? w : w[0].toUpperCase() + w.slice(1)))
    .join('');
}
