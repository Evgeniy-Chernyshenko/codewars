function sumStrings(a, b) {
  // return (+a + +b).toLocaleString('fullwide', { useGrouping: false });
  return BigInt(a) + BigInt(b) + '';
}

console.log(
  sumStrings('712569312664357328695151392', '8100824045303269669937')
);
// '712577413488402631964821329'
