import useBankStore from '../hooks/useBankStore';
import numberFormat from '../utils/numberFormat';

export default function Account() {
  const bankStore = useBankStore();

  return (
    <div>
      <h2>잔액확인</h2>
      <p>
        이름 :
        {' '}
        {bankStore.name}
      </p>
      <p>
        계좌번호 :
        {' '}
        {bankStore.accountNumber}
      </p>
      <p>
        잔액 :
        {' '}
        {numberFormat(bankStore.amount)}
        원
      </p>
    </div>
  );
}
