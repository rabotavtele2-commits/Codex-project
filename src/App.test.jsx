import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Coffee World title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Coffee World/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders Home page by default', () => {
  render(<App />);
  const homeElement = screen.getByText(/Welcome to Coffee World/i);
  expect(homeElement).toBeInTheDocument();
});