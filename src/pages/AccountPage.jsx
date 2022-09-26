import { useEffect } from 'react';
import Account from '../components/Account';
import useBankStore from '../hooks/useBankStore';

export default function AccountPage() {
  // 잔액확인 페이지를 여는 순간 본인의 계좌정보가 한번은 가져와져야 그 정보가 뿌려질 수 있겠지?
  const bankStore = useBankStore();
  useEffect(() => {
    // TODO. fetch account information(누구의 역할이냐? 스토어)
    bankStore.fetchAccount();
  }, []);

  return (
    <Account />
  );
}
