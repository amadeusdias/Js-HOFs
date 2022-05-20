const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  return ids.map((id) => data.species.find((especie) => especie.id === id));
}
// parametro rest na função a fim de poder receber um numero aleatorio de ids, transforma eles em um array.
// se ids é indefinido volta um array vazio
// aplicar um map nos ids, de forma a retornar todos os ids se existir mais de um. Um find logo depois, aplicado ao array species de forma a achar quais ids sao iguais ao array ids.

module.exports = getSpeciesByIds;
