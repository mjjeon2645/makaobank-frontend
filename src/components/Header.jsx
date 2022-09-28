import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import PrimaryButton from './ui/PrimaryButton';

const Container = styled.header`
width: 100%;
padding: 1em;
background: ${(props) => props.theme.colors.panel};

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
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');
  const navigate = useNavigate();

  const handleLogout = () => {
    setAccessToken('');
    navigate('/');
  };

  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          {accessToken ? (
            <>
              <li>
                <Link to="/account">잔액확인</Link>
              </li>
              <li>
                <Link to="/transfer">송금</Link>
              </li>
              <li>
                <Link to="/transactions">거래내역</Link>
              </li>
              <li>
                <PrimaryButton type="button" onClick={handleLogout}>로그아웃</PrimaryButton>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signup">회원가입</Link>
              </li>
              <li>
                <Link to="/login">로그인</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </Container>
  );
}
