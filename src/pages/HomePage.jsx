import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/ui/PrimaryButton';

// TODO. 로그인하지 않았을 경우 송금하기, 거래내역조회를 누르면 페이지이동을 하지 말아야 함
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <p>마카오뱅크에서</p>
        <p>똑똑한 금융습관을 들이세요</p>
      </div>
      <ul>
        <li>
          <PrimaryButton type="button" onClick={() => navigate('/transfer')}>송금하기</PrimaryButton>
        </li>
        <li>
          <PrimaryButton type="button" onClick={() => navigate('/transactions')}>거래내역조회</PrimaryButton>
        </li>
      </ul>
    </div>
  );
}
