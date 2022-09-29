import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PrimaryButton from '../components/ui/PrimaryButton';
import Main from '../assets/main.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5em;
`;

const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
  p {
    margin-top: .3em;
  }
`;

const Buttons = styled.ul`
  display: flex;
  margin-top: 3em;

  li {
    margin-right: 3em;
  }
`;

const Image = styled.img`
  width: 40vh;
`;

// TODO. 로그인하지 않았을 경우 송금하기, 거래내역조회를 누르면 페이지이동을 하지 말아야 함
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <Title>
          <p>마카오뱅크에서</p>
          <p>똑똑한 금융습관을 들이세요</p>
        </Title>
        <Buttons>
          <li>
            <PrimaryButton type="button" onClick={() => navigate('/transfer')}>송금하기</PrimaryButton>
          </li>
          <li>
            <PrimaryButton type="button" onClick={() => navigate('/transactions')}>거래내역조회</PrimaryButton>
          </li>
        </Buttons>
      </div>
      <div>
        <Image src={Main} alt="" />
      </div>
    </Container>
  );
}
