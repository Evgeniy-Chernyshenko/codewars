const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!';
  }

  let wonPlayer;
  const items = ['scissors', 'paper', 'rock'];
  const p1Index = items.indexOf(p1);

  if (p2 === items[(p1Index + 1) % items.length]) {
    wonPlayer = 1;
  } else {
    wonPlayer = 2;
  }

  return `Player ${wonPlayer} won!`;
};
