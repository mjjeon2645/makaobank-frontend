import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useBankStore from '../hooks/useBankStore';
import PrimaryButton from './ui/PrimaryButton';

export default function SignUpForm() {
  const bankStore = useBankStore();

  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [accountNumberErrorMessage, setAccountNumberErrorMessage] = useState('로그인 및 거래시 사용될 계좌번호이며 숫자만 사용 가능(8글자)');

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const {
      name, accountNumber, password, checkPassword,
    } = data;

    const result = await bankStore.requestSignUp({
      name, accountNumber, password, checkPassword,
    });

    if (result.startsWith('비')) {
      setPasswordErrorMessage(result);
      setTimeout(() => setPasswordErrorMessage(''), 2000);
      return;
    }

    if (result.startsWith('이')) {
      setAccountNumberErrorMessage(result);
      setTimeout(() => setAccountNumberErrorMessage('로그인 및 거래시 사용될 계좌번호이며 숫자만 사용 가능(8글자)'), 2000);
      return;
    }

      navigate('/welcome');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>SIGN UP</h2>
      <div>
        <label htmlFor="input-name">이름 &#58;</label>
        <input
          id="input-name"
          // eslint-disable-next-line react/jsx-props-no-spreading
          // {...register('name', { required: true, pattern: /^[ㄱ-ㅎ|가-힣]{3,7}$/})}
          {...register('name', 
          { required: { value: true, message: '[에러]이름을 입력해주세요'}, 
          pattern: {value: /^[ㄱ-ㅎ|가-힣]{3,7}$/, message: '[에러]3~7자까지 한글만 사용 가능'}})}
        />
        {errors.name ? (
          <p>{errors.name.message}</p>
        ) : (
          <p>3~7자까지 한글만 사용 가능</p>
        )}
      </div>
      <div>
        <label htmlFor="input-account-number">계좌번호 입력 &#58;</label>
        <input
          id="input-account-number"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register(
            'accountNumber',
            { required: { value: true, message: '[에러]계좌번호로 사용될 숫자를 입력해주세요(8글자)'}, 
          pattern: {value: /^[0-9]{8}$/, message: '[에러]로그인 및 거래시 사용될 계좌번호이며 숫자만 사용 가능(8글자)'}})}
        />
        {errors.accountNumber ? (
          <p>{errors.accountNumber.message}</p>
        ) : (
          <p>{accountNumberErrorMessage}</p>
        )}
      </div>
      <div>
        <label htmlFor="input-password">비밀번호 &#58;</label>
        <input
          id="input-password"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register(
            'password',
            { required: { value: true, message: '[에러]비밀번호를 입력해주세요'}, 
          pattern: {value: /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/, 
          message: '[에러]8글자 이상의 영문(대소문자), 숫자, 특수문자가 모두 포함되어야 함'}})}
        />
        {errors.password ? (
          <p>{errors.password.message}</p>
        ) : (
          <p>8글자 이상의 영문(대소문자), 숫자, 특수문자가 모두 포함되어야 함</p>
        )}
      </div>
      <div>
        <label htmlFor="input-check-password">비밀번호 확인 &#58;</label>
        <input
          id="input-check-password"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('checkPassword', {
            required: {
              value: true,
              message: '[에러]비밀번호를 입력해주세요',
            },
          })}
        />
        {errors.checkPassword ? (
          <p>{errors.checkPassword.message}</p>
        ) : (
        <p>{passwordErrorMessage}</p>
        )}
      </div>
      <PrimaryButton type="submit">회원가입</PrimaryButton>
    </form>
  );
}
