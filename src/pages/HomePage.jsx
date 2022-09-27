import SecondaryButton from '../components/ui/SecondaryButton';
import { bankStore } from '../stores/BankStore';

// TODO. 로그인 버튼이 여기에 있으면 안됨. 로그인은 새로운 별도의 페이지로 만들어주는게 나을 것 같다.

export default function HomePage() {
  const handleLogin = () => {
    bankStore.login({ accountNumber: '1234', password: 'password' });
  };

  return (
    <div>
      <div>
        <p>마카오뱅크에서</p>
        <p>똑똑한 금융습관을 들이세요</p>
      </div>
      <ul>
        <li>
          송금하기
        </li>
        <li>
          거래내역조회
        </li>
        <li>
          <SecondaryButton type="button" onClick={handleLogin}>
            로그인
          </SecondaryButton>
        </li>
      </ul>
    </div>
  );
}
