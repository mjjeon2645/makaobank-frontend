import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import useBankStore from '../hooks/useBankStore';
import PrimaryButton from './ui/PrimaryButton';

export default function LoginForm() {
  const navigate = useNavigate();

  const [, setAccessToken] = useLocalStorage('accessToken', '');

  const bankStore = useBankStore();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const { accountNumber, password } = data;
    const accessToken = await bankStore.login({ accountNumber, password });

    if (accessToken) {
      setAccessToken(accessToken);
      navigate('/');
    }
  };

  const handleGoingSignUpPage = () => {
    navigate('/signup');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>로그인</h2>
        <div>
          <label htmlFor="input-account-number">계좌번호</label>
          <input
            id="input-account-number"
            placeholder="아이디(계좌번호)"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('accountNumber', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="input-password">비밀번호</label>
          <input
            id="input-password"
            placeholder="비밀번호"
            type="password"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('password', { required: true })}
          />
        </div>
        <PrimaryButton type="submit" onClick={() => {}}>
          로그인하기
        </PrimaryButton>
      </form>
      <PrimaryButton type="button" onClick={handleGoingSignUpPage}>
        회원가입
      </PrimaryButton>
    </div>
  );
}
