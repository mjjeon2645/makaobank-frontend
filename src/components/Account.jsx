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
      <p>계좌번호 : </p>
      <p>잔액 : </p>
    </div>
  );
}
