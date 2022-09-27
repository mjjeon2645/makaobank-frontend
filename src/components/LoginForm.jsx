import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import useBankStore from '../hooks/useBankStore';
import PrimaryButton from './ui/PrimaryButton';

export default function LoginForm() {
  const navigate = useNavigate();

  const [, setAccessToken] = useLocalStorage('accessToken', '');

  const bankStore = useBankStore();

  const { register, handleSubmit } = useForm();

  // console.log에 acceessToken 왜 안받아와지는건지 트러블슈팅 해야 함(브라우저에서는 되는데..)
  const onSubmit = async (data) => {
    const { accountNumber, password } = data;
    const accessToken = await bankStore.login({ accountNumber, password });

    /* ************************ */
    console.log(`제발나와라!!!${accessToken}`);
    /* ************************ */

    if (accessToken) {
      setAccessToken(accessToken);
      navigate('/');
    }
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
        <PrimaryButton type="submit" onClick={() => {}}>
          로그인하기
        </PrimaryButton>
      </form>
    </div>
  );
}
