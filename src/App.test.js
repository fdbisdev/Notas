import { render, screen } from '@testing-library/react';
import App from './App';
import Nota from './Nota';

test('renders learn react link', () => {
  render(<App />);
  render(<Nota />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
