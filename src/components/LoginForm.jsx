import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import useBankStore from '../hooks/useBankStore';
import PrimaryButton from './ui/PrimaryButton';

export default function LoginForm() {
  const navigate = useNavigate();

  const [, setAccessToken] = useLocalStorage('accessToken', '');

  const [errorMessage, setErrorMessage] = useState('');

  const bankStore = useBankStore();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const { accountNumber, password } = data;
    const result = await bankStore.login({ accountNumber, password });

    console.log(result);
    if (result.indexOf('.') !== -1) {
      setAccessToken(result);
      setErrorMessage('');
      navigate('/');
    }

    if (result.indexOf('.') === -1) {
      setErrorMessage(result);
    }
  };

  const handleGoingSignUpPage = () => {
    setErrorMessage('');
    navigate('/signup');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>USER LOGIN</h2>
        <div>
          <label htmlFor="input-account-number">계좌번호</label>
          <input
            id="input-account-number"
            placeholder="아이디(계좌번호)"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('accountNumber', {
              required: {
                value: true,
                message: '아이디를 입력해주세요',
              },
            })}
          />
          {errors.accountNumber ? (
            <p>{errors.accountNumber.message}</p>
          ) : (
            <p>{ errorMessage }</p>
          )}
        </div>
        <div>
          <label htmlFor="input-password">비밀번호</label>
          <input
            id="input-password"
            placeholder="비밀번호"
            type="password"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('password', {
              required: {
                value: true,
                message: '비밀번호를 입력해주세요',
              },
            })}
          />
          {errors.password ? (
            <p>{errors.password.message}</p>
          ) : (
            <p>{ errorMessage }</p>
          )}
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
