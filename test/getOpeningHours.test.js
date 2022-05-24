const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('caso não receba argumentos, a função deve retornar um objeto contendo a tabela de funcionamento completa:', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });
  it('ao receber os argumentos Monday e 09:00 AM, deve retornar uma mensagem de Zoo fechado', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  it('ao receber os argumentos Tuesday e 09:00-AM, deve retornar uma mensagem de Zoo aberto', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
  });
  it('ao receber os argumentos Wednesday e 09:00-PM, deve retornar uma mensgem de Zoo fechado', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  it('dispara erro com a mensagem "The day must be valid. Example: Monday", quando os argumentos não tiverem formatos validos', () => {
    const actual = ('Thu', '09:00-AM');
    expect(() => getOpeningHours(actual)).toThrow('The day must be valid. Example: Monday');
  });
  it('dispara um erro com a mensagem "The abbreviation must be "AM" or "PM", quando os argumentos não tiverem formatados', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM').toThrow('The abbreviation must be "AM" or "PM"'));
  });
  it('dispara um erro para os argumentos Saturday e C9:00-AM, com a mensagem "The hour should represent a number" ', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  it('dispara um erro para os argumentos Sunday e 09:c0-AM, com a mensagem "The minutes should represent a number" ', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
});
