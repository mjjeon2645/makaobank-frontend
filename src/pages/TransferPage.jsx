import { useState } from 'react';

export default function TransferPage() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input-accountNumber">받는 분 계좌번호 &#58;</label>
        <input
          id="input-accountNumber"
          type="number"
        />
      </div>
      <div>
        <label htmlFor="input-amount">보낼금액&#40;원&#41; &#58;</label>
        <input
          id="input-amount"
          type="number"
        />
      </div>
      <div>
        <label htmlFor="input-name">받는 분 통장 표시 &#58;</label>
        <input
          id="input-name"
          type="text"
        />
      </div>
      <button type="submit">보내기</button>
      {success ? (
        <p>계좌 이체 성공</p>
      ) : null}
    </form>
  );
}
