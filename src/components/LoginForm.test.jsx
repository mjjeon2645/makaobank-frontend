/* eslint-disable react/prop-types */
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/defaultTheme';
import LoginForm from './LoginForm';

test('LoginForm', () => {
  render((
    <ThemeProvider theme={defaultTheme}>
      <LoginForm />
    </ThemeProvider>
  ));

  screen.getByRole('heading', { name: '로그인' });

  fireEvent.change(screen.getByLabelText('계좌번호'), {
    target: { value: '1234' },
  });

  fireEvent.change(screen.getByLabelText('비밀번호'), {
    target: { value: 'password' },
  });

  fireEvent.click(screen.getByText('로그인하기'));
});
