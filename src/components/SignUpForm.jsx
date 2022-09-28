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

    // 언제나 그랬듯이 계정 생성 요청에 대한 처리는 bankStore의 담당이 아닐까?

    const newAccount = await bankStore.requestSignUp({
      name, accountNumber, password, checkPassword,
    });

    /* ************************ */
    console.log(`제발나와라!!!${newAccount}`);
    /* ************************ */

    // 새로운 계좌가 생성되었을 경우 웰컴 페이지로 이동한 다음, 그 웰컴페이지에
    // 로그인하기 버튼을 눌러서 로그인페이지로 이동할 수 있도록 한다.
    if (newAccount) {
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
          {...register('accoutNumber', { required: true })}
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
