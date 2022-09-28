import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useBankStore from '../hooks/useBankStore';
import PrimaryButton from './ui/PrimaryButton';

export default function SignUpForm() {
  const bankStore = useBankStore();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const {
      name, accountNumber, password, checkPassword,
    } = data;

    const userAccountNumber = await bankStore.requestSignUp({
      name, accountNumber, password, checkPassword,
    });

    if (userAccountNumber) {
      navigate('/welcome');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="input-name">이름 &#58;</label>
        <input
          id="input-name"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('name', { required: true })}
        />
      </div>
      <div>
        <label htmlFor="input-account-number">계좌번호 입력 &#58;</label>
        <input
          id="input-account-number"
          type="number"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('accountNumber', { required: true })}
        />
      </div>
      <div>
        <label htmlFor="input-password">비밀번호 &#58;</label>
        <input
          id="input-password"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('password', { required: true })}
        />
      </div>
      <div>
        <label htmlFor="input-check-password">비밀번호 확인 &#58;</label>
        <input
          id="input-check-password"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('checkPassword', { required: true })}
        />
      </div>
      <PrimaryButton type="submit">회원가입</PrimaryButton>
    </form>
  );
}
