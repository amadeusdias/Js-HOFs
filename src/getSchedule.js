const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

// função que recebe um animal como parametro e retorna os dias em que ele esta disponivel.

const agendaAnimal = (animal) => species
  .find((viabilidade) => viabilidade.name === animal).availability;

// função que recebe um dia da semana e retorna o horario de funcionamento.
const horarioDoDia = (dia) => {
  const days = Object.keys(hours);
  if (dia === days[6]) {
    return 'CLOSED';
  }
  return `Open from ${hours[dia].open}am until ${hours[dia].close}pm`;
};

// funçao que recebe um dia da semana e retorna os animais disponiveis aquele dia
const animaisDoDia = (dia) => {
  const days = Object.keys(hours);
  if (dia === days[6]) {
    return 'The zoo will be closed!';
  }
  const disponivel = species
    .filter((especie) => especie.availability.includes(dia))
    .map((especies) => especies.name);
  return disponivel;
};

// retorna o objeto pedido com horario e animais para exibição quando recebe como parametro um dia da semana.
const agenda = (dia) => ({
  [dia]: {
    officeHour: horarioDoDia(dia),
    exhibition: animaisDoDia(dia),
  },
});

function getSchedule(scheduleTarget) {
  const days = Object.keys(hours);
  const agendaSemana = {};

  if (days.some((day) => day === scheduleTarget)) {
    return agenda(scheduleTarget);
  }
  if (species.some((specie) => specie.name === scheduleTarget)) {
    return agendaAnimal(scheduleTarget);
  }
  days.forEach((dias) => {
    agendaSemana[dias] = agenda(dias)[dias];
  });
  return agendaSemana;
}

module.exports = getSchedule;
