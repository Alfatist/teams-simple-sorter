let jogadores = [];

for (let i = 0; i < 8; i++) {
  jogadores[i] = [i, Math.floor(Math.random() * 4), Math.floor(Math.random() * 2)];
}
jogadores.sort(comparar);

function comparar(a, b) {
  // retorna os jogadores ordenados por menor número de bye e menor pontuação.
  return a[2] === b[2] ? b[1] - a[1] : b[2] - a[2];
}
console.log(jogadores);
