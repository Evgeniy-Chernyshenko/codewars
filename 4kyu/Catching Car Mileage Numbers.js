function isInteresting(number, awesomePhrases) {
  const comingNumbers = [...Array(3)].map((_, i) => number + i);

  for (let i = 0; i < comingNumbers.length; i++) {
    const currentNumber = comingNumbers[i];

    if (currentNumber.toString().length < 3) {
      continue;
    }

    if (/^[1-9]0+$/.test(currentNumber)) {
      return i === 0 ? 2 : 1;
    }

    if (/^(\d)\1+$/.test(currentNumber)) {
      return i === 0 ? 2 : 1;
    }

    const digits = currentNumber.toString().split('');
    for (let j = 0; j < digits.length; j++) {
      if (digits[j + 1] === undefined) {
        return i === 0 ? 2 : 1;
      } else if (+digits[j + 1] !== +(+digits[j] + 1).toString().slice(-1)) {
        break;
      }
    }
    for (let j = 0; j < digits.length; j++) {
      if (digits[j + 1] === undefined) {
        return i === 0 ? 2 : 1;
      } else if (+digits[j + 1] !== +digits[j] - 1) {
        break;
      }
    }
    const palindromesLoopCount = Math.floor(digits.length / 2);
    for (let j = 0; j < palindromesLoopCount; j++) {
      if (digits[j] !== digits.slice(-j - 1)[0]) {
        break;
      }

      if (j === palindromesLoopCount - 1) {
        return i === 0 ? 2 : 1;
      }
    }

    if (awesomePhrases.includes(currentNumber)) {
      return i === 0 ? 2 : 1;
    }
  }

  return 0;
}
