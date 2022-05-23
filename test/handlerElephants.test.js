const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('ao receber como parametro a string "count" retorna o numero de elefantes no zoologico', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });
  it('ao receber um parametro diferente de string, retorna essa mensagem', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('ao receber como parametro a string "name" deve retornar um array com o nome "jeffersson"', () => {
    const actual = handlerElephants('names');
    const expected = 'Jefferson';
    expect(actual).toContain(expected);
  });
  it('ao receber a string "averageAge" deve retornar a media das idades dos elefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected);
  });
  it('ao receber a string "location" retorna a localização dos animais', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toEqual(expected);
  });
  it('ao receber a string "popularity como parametro deve retornar um numero maior ou igual a 5', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toBeCloseTo(expected);
  });
  it('ao receber a string availability deve retornar retornar um array de dias que nao contem "Monday"', () => {
    const actual = handlerElephants('availability');
    const expected = 'Monday';
    expect(actual).not.toContain(expected);
  });
});
