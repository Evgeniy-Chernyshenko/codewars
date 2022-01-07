function smash(words) {
  return words.join(' ');
}

console.log(smash([]));
// ""
console.log(smash(['this', 'is', 'a', 'really', 'long', 'sentence']));
// "this is a really long sentence"
