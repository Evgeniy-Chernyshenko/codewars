// return masked string
function maskify(cc) {
  return cc.replace(
    /(.+)(.{4})/,
    (_, p1, p2) => Array(p1.length).fill('#').join('') + p2
  );
}
