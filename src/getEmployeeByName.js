const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const nomes = employees.find((nome) =>
    nome.firstName === employeeName || nome.lastName === employeeName);
  return nomes;
}
// primeiro verfica se o parametro esta vazio ou não.
// a const nomes usa o find para percorrer o array de objetos employees e procura aquele que possui o nome ou ultimo nome igual ao parametro passado, devolvendo o objeto do funcionario.
console.log(getEmployeeByName('Nelson'));
module.exports = getEmployeeByName;
