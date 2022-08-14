const pigIt = (str) =>
  str
    .split(" ")
    .map((part) =>
      /\w/.test(part) ? part.slice(1) + part.slice(0, 1) + "ay" : part
    )
    .join(" ");
