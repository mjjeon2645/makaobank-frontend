import styled from 'styled-components';
import useBankStore from '../hooks/useBankStore';
import numberFormat from '../utils/numberFormat';

const Table = styled.table`
    th, td, tr{
      border: 1px #b8b8b8;
    }

    td {
        padding: .4em;
    }
`;

const Container = styled.div`
  color: #606060;
  padding-inline: calc((100% - 500px) / 2);
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 2em;
  color: #606060;
  border-bottom: 1px solid #DDD;
`;

const TableHeader = styled.tr`
  height: 1em;
  background-color: #A79FFF;
  color: #FFF;
`;

const TableBody = styled.tbody`
  text-align: center;
  
`;

export default function Transactions() {
  const bankStore = useBankStore();

  const { transactions } = bankStore;

  if (!transactions.length) {
    return (
      <p>거래내역이 없습니다</p>
    );
  }

  return (
    <Container>
      <Title>거래내역</Title>
      <Table>
        <thead>
          <TableHeader>
            <th>종류</th>
            <th>계좌번호</th>
            <th>금액(원)</th>
          </TableHeader>
        </thead>
        <TableBody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.activity}</td>
              <td>{transaction.name}</td>
              <td>{numberFormat(transaction.amount)}</td>
            </tr>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
