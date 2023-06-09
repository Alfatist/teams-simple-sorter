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
`
<section class="second_screen">
        <form action="#" class="rounds">
          <h2>Rodada 1</h2>
          <ul>
            <li>Fulano <input type="number" min="0" required /> vs <input type="number" min="0" required /> Ciclano</li>
            <li>Fulano <input type="number" min="0" required /> vs <input type="number" min="0" required /> Ciclano</li>
            <li>Fulano <input type="number" min="0" required /> vs <input type="number" min="0" required /> Ciclano</li>
            <li>Bye: <span class="bye">beltrano</span></li>
            <!-- Adicione mais <li> para cada rodada -->
          </ul>
          <button type="submit" class="advance-button">Avançar Rodada</button>
        </form>
        <div class="table">
          <table>
            <tr>
              <th></th>
              <th>J</th>
              <th>V</th>
              <th>E</th>
              <th>D</th>
              <th>Bye</th>
            </tr>
            <tr>
              <td>Fulano</td>
              <td>5</td>
              <td>4</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Ciclano</td>
              <td>4</td>
              <td>2</td>
              <td>2</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <!-- Adicione mais <tr> para cada linha da tabela -->
          </table>
        </div>
      </section>`;
