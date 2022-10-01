import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/ui/PrimaryButton';
import useBankStore from '../hooks/useBankStore';

export default function WelcomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  const bankStore = useBankStore();
  return (
    <div>
      <p>
        환영합니다,
        {' '}
        {bankStore.name}
        {' '}
        회원님!
      </p>
      <p>
        회원님의 계좌번호는
        {' '}
        {bankStore.accountNumber}
        {' '}
        입니다.
      </p>
      <p>이제 마카오뱅크와 함께 똑똑한 소비습관을 길러보아요!</p>
      <PrimaryButton type="button" onClick={handleClick}>
        로그인하기
      </PrimaryButton>
    </div>
  );
}
