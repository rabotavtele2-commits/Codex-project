import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Russian site title', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', {
    level: 1,
    name: /Мир кофе/i,
  });
  expect(titleElement).toBeInTheDocument();
});

test('renders Russian home page by default', () => {
  render(<App />);
  const homeElement = screen.getByText(/Добро пожаловать в мир кофе/i);
  expect(homeElement).toBeInTheDocument();
});
