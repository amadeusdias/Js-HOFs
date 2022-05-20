const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const especie = species.find((animals) => animals.name === animal);
  return especie.residents.every((idade) => idade.age >= age);
}
// a constante especie acha o array do animal de acordo com o nome animal dado como parametro, utilizando um find para isso.
// o return usa um every para verificar se todos os animais da const possuem a idade minima dada pelo parametro age.
console.log(getAnimalsOlderThan('lions', 4));

module.exports = getAnimalsOlderThan;
