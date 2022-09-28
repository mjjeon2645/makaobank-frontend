import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useBankStore from '../hooks/useBankStore';
import PrimaryButton from './ui/PrimaryButton';

export default function SignUpForm() {
  const bankStore = useBankStore();

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

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

  const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="input-name">이름 &#58;</label>
        <input
          id="input-name"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register(
            'name',
            {
              required: { value: true, message: '이름을 입력해주세요' },
              minLength: { value: 3, message: '3~7자까지 한글만 사용 가능' },
              maxLength: { value: 7, message: '3~7자까지 한글만 사용 가능' },
            },
          )}
        />
        {/* {errors.name?.type === 'required' && <p role="alert">Hi</p>} */}
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
            {
              required: {
                value: true,
                message: '계좌번호로 사용될 숫자를 입력해주세요(8글자)',
              },
              maxLength: {
                value: 8,
                message: '로그인 및 거래시 사용될 계좌번호이며 숫자만 사용 가능(8글자)',
              },

            },
          )}
        />
        {errors.accountNumber ? (
          <p>{errors.accountNumber.message}</p>
        ) : (
          <p>로그인 및 거래시 사용될 계좌번호이며 숫자만 사용 가능(8글자)</p>
        )}
      </div>
      <div>
        <label htmlFor="input-password">비밀번호 &#58;</label>
        <input
          id="input-password"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('password', { pattern: /[1-9]{3}/ })}
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
          {...register('checkPassword', { required: true })}
        />
        {errors.checkPassword ? (
          <p>{errors.checkPassword.message}</p>
        ) : (
          null
        )}
      </div>
      <PrimaryButton type="submit">회원가입</PrimaryButton>
    </form>
  );
}
