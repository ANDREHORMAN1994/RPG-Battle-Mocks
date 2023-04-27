import { render, screen } from '@testing-library/react';
import App from '../App';

const enemy = {
  id: 1,
  name: 'Chapolin Colorado',
  source: 'Chaves',
  defensePoints: 30,
};

it('testa a requisção para a API', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue([enemy]),
  });

  render(<App />);

  const nameEl = await screen.findByRole('heading', { name: /Chapolin Colorado/i });
  expect(nameEl).toBeInTheDocument();
});
