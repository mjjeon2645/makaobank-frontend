import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import useBankStore from '../hooks/useBankStore';
import PrimaryButton from './ui/PrimaryButton';

const Error = styled.div`
  font-weight: bold;
  color: #F00;
`;

export default function TransferForm() {
  const bankStore = useBankStore();

  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { accountNumber, amount, name } = data;

    await bankStore.requestTransfer({ to: accountNumber, amount, name });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="input-account">받는 분 계좌번호 &#58;</label>
        <input
          id="input-account"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('accountNumber', { required: true })}
        />
        {errors.accountNumber ? (
          <Error>계좌번호를 입력해 주세요</Error>
        ) : null}
      </div>
      <div>
        <label htmlFor="input-amount">보낼금액&#40;원&#41; &#58;</label>
        <input
          id="input-amount"
          type="number"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('amount', { required: true })}
        />
        {errors.amount ? (
          <Error>금액을 입력해 주세요</Error>
        ) : null}
      </div>
      <div>
        <label htmlFor="input-name">받는 분 통장 표시 &#58;</label>
        <input
          id="input-name"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('name', { required: true })}
        />
        {errors.name ? (
          <Error>입금 받는 분의 통장에 표시될 이름을 입력하세요</Error>
        ) : null}
      </div>
      <PrimaryButton type="submit" disabled={bankStore.isTransferProcessing}>보내기</PrimaryButton>
      {bankStore.isTransferProcessing ? (
        <p>송금 진행중...</p>
      ) : null}
      {bankStore.isTransferSuccess ? (
        <p>✅ 송금 완료!</p>
      ) : null}
      {bankStore.isTransferFail ? (
        <Error>
          <p>계좌 이체 실패</p>
          <p>{bankStore.errorMessage}</p>
        </Error>
      ) : null}
    </form>
  );
}
