import rollMultipleDice from '../service/rollMultipleDice';
import attackEnemy from '../service/attackEnemy';

const enemy = {
  id: 1,
  name: 'Chapolin Colorado',
  source: 'Chaves',
  defensePoints: 30,
};

jest.mock('../service/rollMultipleDice');

it('testa uma vitória na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValue(31);

  // console.log(attackEnemy(3, 20, enemy));
  // expect(attackEnemy(3, 20, enemy).success).toBeTruthy();
  // expect(attackEnemy(3, 20, enemy)).toEqual({
  //   attackPoints: 31,
  //   defensePoints: 30,
  //   success: true,
  // });
  expect(attackEnemy(3, 20, enemy)).toHaveProperty('success', true);
});

it('testa uma derrota na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValue(29);
  expect(attackEnemy(3, 20, enemy)).toHaveProperty('success', false);
});

it('testa um empate nos dados, gerando derrota no `attackEnemy`', () => {
  rollMultipleDice.mockReturnValue(enemy.defensePoints);
  expect(attackEnemy(3, 20, enemy)).toHaveProperty('success', false);
});
