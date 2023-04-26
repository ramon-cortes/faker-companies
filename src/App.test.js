// Original: "test": "react-scripts test"

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FAKER COMPANIES as title', () => {
  render(<App />);
  expect(screen.getByText('FAKER COMPANIES')).toBeInTheDocument();
});
