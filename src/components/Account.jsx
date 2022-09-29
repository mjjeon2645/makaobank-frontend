import styled from 'styled-components';
import useBankStore from '../hooks/useBankStore';
import numberFormat from '../utils/numberFormat';

const Container = styled.div`
  color: #606060;
  padding-inline: calc((100% - 500px) / 2);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 2em;
  color: #606060;
  align-self: center;
  border-bottom: 1px solid #DDD;
`;

export default function Account() {
  const bankStore = useBankStore();

  return (
    <Container>
      <Title>잔액확인</Title>
      <p>
        <strong>이름 :</strong>
        {' '}
        {bankStore.name}
      </p>
      <p>
        <strong>계좌번호 :</strong>
        {' '}
        {bankStore.accountNumber}
      </p>
      {bankStore.amount > 0 ? (
        <p>
          <strong>잔액 :</strong>
          {' '}
          {numberFormat(bankStore.amount)}
          원
        </p>
      ) : (
        <p>잔액이 없습니다</p>
      )}
    </Container>
  );
}
