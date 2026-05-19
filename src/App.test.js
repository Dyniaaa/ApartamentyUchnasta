import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/Logo Apartamenty Uchnasta/i);
  expect(logoElement).toBeInTheDocument();
});
