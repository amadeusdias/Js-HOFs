const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const empregado = employees.find((pessoa) => pessoa.id === id);
  const firstAnimal = species.find((animal) => animal.id === empregado.responsibleFor[0]);
  const olderAnimal = firstAnimal.residents.sort((a, b) => b.age - a.age)[0];
  return [olderAnimal.name, olderAnimal.sex, olderAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
