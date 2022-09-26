/* eslint-disable react/prop-types */
import { render, screen } from '@testing-library/react';
import Header from './Header';

// jest.mock('react-router-dom', () => ({
//   Link({ children }) {
//     return children;
//   },
// }));

jest.mock('react-router-dom', () => ({
  Link({ children, to }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
}));

test('Header', () => {
  render(<Header />);

  screen.getByText(/잔액확인/);
});
