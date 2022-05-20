const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((empregados) => empregados.managers.includes(id));
}
// a primeira função define se o id recebido esta presente dentro das chaves manegers, oque qualifica a pessoa do id como gerente.

// a segunda função deve fazer duas coisas: mostrar se a pessoa é gerente ou não a partir da função de cima. E depois deve filtrar o array objeto, vendo quais objetos ali dentro possuem o id do gerente na chave maneger e depois volar com o nome dos empregados que esse gerente tem sob seus cuidados.

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const related = employees.filter((element) => element.managers.includes(managerId))
    .map((gerenciados) => `${gerenciados.firstName} ${gerenciados.lastName}`);
  return related;
}

module.exports = { isManager, getRelatedEmployees };
