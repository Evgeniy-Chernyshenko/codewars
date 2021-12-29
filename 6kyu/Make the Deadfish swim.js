// Return the output array, and ignore all non-op characters
function parse(data) {
  let value = 0;
  let resultArray = [];

  for (const symbol of data) {
    if (symbol === 'i') {
      value++;
    }

    if (symbol === 'd') {
      value--;
    }

    if (symbol === 's') {
      value *= value;
    }

    if (symbol === 'o') {
      resultArray.push(value);
    }
  }

  return resultArray;
}
