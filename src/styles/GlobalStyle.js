import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0
  }

  a {
    color: #000;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
