import { Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { useState } from 'react';
import Header from './components/Header';
import AccountPage from './pages/AccountPage';

import HomePage from './pages/HomePage';
import TransactionsPage from './pages/TransactionsPage';
import TransferPage from './pages/TransferPage';
import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';
import GlobalStyle from './styles/GlobalStyle';
import PrimaryButton from './components/ui/PrimaryButton';
import SecondaryButton from './components/ui/SecondaryButton';

const Main = styled.main`
  padding: 1em;
`;

export default function App() {
  const [theme, setTheme] = useState(defaultTheme);

  const handleClick = () => {
    setTheme(theme === defaultTheme ? darkTheme : defaultTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Header />
      <PrimaryButton type="button" onClick={handleClick}>화면모드 바꾸기</PrimaryButton>
      {/* <SecondaryButton type="button" onClick={handleClick}>ToggleButton</SecondaryButton> */}
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
        </Routes>
      </Main>
    </ThemeProvider>
  );
}
