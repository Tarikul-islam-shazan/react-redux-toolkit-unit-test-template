import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithProviders } from '../utils/testWithReduxUtils';

test('renders app header', () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/Product Entry/i);
  expect(linkElement).toBeInTheDocument();
});
