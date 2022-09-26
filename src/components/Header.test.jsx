/* eslint-disable react/prop-types */
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/defaultTheme';
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
  render((
    <ThemeProvider theme={defaultTheme}>
      <Header />
    </ThemeProvider>
  ));

  screen.getByText(/잔액확인/);
});
