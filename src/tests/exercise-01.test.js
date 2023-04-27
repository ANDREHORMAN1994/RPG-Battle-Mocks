import rollDice from '../service/rollDice';

// USANDO MOCK
// jest.mock('../service/rollDice');

it('testa a função `rollDice`', () => {
  // rollDice.mockReturnValue(10);
  // rollDice.mockImplementation(() => 15);

  // USANDO FN
  // Math.random = jest.fn().mockReturnValue(0.8);

  // USANDO SPYON
  jest.spyOn(Math, 'random').mockReturnValue(0.8);

  // Teste que o valor retornado pela função é igual a 16.
  expect(rollDice(20)).toBe(16);

  // Teste que a função Math.random foi chamada uma única vez.
  expect(Math.random).toHaveBeenCalledTimes(1);

  // Teste se é possível mockar o .map de um array
  const meuArray = [1, 2, 3];

  jest.spyOn(meuArray, 'map').mockReturnValue('xablau');

  console.log(meuArray.map());
});
