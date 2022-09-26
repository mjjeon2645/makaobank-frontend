import { render, screen } from '@testing-library/react';
import Account from './Account';

test('Account', () => {
  render(<Account />);

  screen.getByText('잔액확인');

  screen.getByText(/이름 : tester/);
  screen.getByText(/계좌번호 : 1234/);
  screen.getByText(/잔액 : 100,000원/);
});
