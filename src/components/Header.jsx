import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.header`
width: 100%;
padding: 1em;
background: #EEE;

  nav {
    ul {
      display: flex;
    }

    li {
      margin-right: .5em;
    }
  }
`;

export default function Header() {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/account">잔액확인</Link>
          </li>
          <li>
            <Link to="/transfer">송금</Link>
          </li>
          <li>
            <Link to="/transactions">거래내역</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
