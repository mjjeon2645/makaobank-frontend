import { useForm } from 'react-hook-form';
import useBankStore from '../hooks/useBankStore';
import PrimaryButton from './ui/PrimaryButton';

export default function LoginForm() {
  const bankStore = useBankStore();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const { accountNumber, password } = data;
    const accessToken = await bankStore.login({ accountNumber, password });
    console.log(accessToken);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>로그인</h2>
        <div>
          <label htmlFor="input-account-number">계좌번호</label>
          <input
            id="input-account-number"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('accountNumber', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="input-password">비밀번호</label>
          <input
            id="input-password"
            type="password"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('password', { required: true })}
          />
        </div>
        <PrimaryButton type="submit">
          로그인하기
        </PrimaryButton>
      </form>
    </div>
  );
}
