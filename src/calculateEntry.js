const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const visitantes = entrants.reduce((accIdade, visita) => {
    if (visita.age < 18) {
      return { child: accIdade.child + 1, adult: accIdade.adult, senior: accIdade.senior };
    }
    if (visita.age >= 18 && visita.age < 50) {
      return { child: accIdade.child, adult: accIdade.adult + 1, senior: accIdade.senior };
    }
    return { child: accIdade.child, adult: accIdade.adult, senior: accIdade.senior + 1 };
  },
  { child: 0, adult: 0, senior: 0 });
  return visitantes;
}
// a primeira função usa o metodo reduce para fazer um contador, que adiciona um em cada categoria de acordo com os parametros de idade passados. A aula do professor atanes sobre reduce ensina esse metodo.
function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitante = countEntrants(entrants);
  return (visitante.child * prices.child) + (visitante.adult * prices.adult)
  + (visitante.senior * prices.senior);
}
// a segunda função multiplica o numero dos ingressos de acordo com a faixa etaria dos visitantes, depois soma o valor total. É so utilizar a saida da primeira função e acessar o valor de cada categoria que esta no banco de dados.
module.exports = { calculateEntry, countEntrants };
