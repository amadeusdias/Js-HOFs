const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const total = {};
    species.forEach((animals) => {
      total[animals.name] = animals.residents.length;
    });
    return total;
  }
  if (Object.keys(animal).length === 1) {
    const bicho = species.find((animals) => animals.name === animal.specie);
    return bicho.residents.length;
  }
  if (Object.keys(animal).length === 2) {
    const nome = species.find((animals) => animals.name === animal.specie);
    const genero = nome.residents.filter((sexo) => sexo.sex === animal.sex);
    return genero.length;
  }
}
// o primeiro if deve retornar um objeto contendo o par chave/valor no formato especie/numero de residentes. Para isso utiliza um forEach que itera sobre o array Species retornando o objeto total com o par chave valor pedido.
// o segundo if verifica se o objeto recebido como parametro possui somente uma chave, no caso smp a chave scpecie, e prossegue usando um find para filtrar o array species pelo nome da specie parametro. Retorna então o numero de animais daquela especie no logico atraves do tamanho do array residents.
// o terceiro if verifica se o numero de chaves do obejto parametro é igual a dois, a segunda chave sendo esperada como sex. Prossegue então a usar um find para achar o animal de species que é igual a especie setada como parametro. Depois filtra os animais dessa especies pelo genero e devolve o numero de animais do sexo passado como parametro.
module.exports = countAnimals;
