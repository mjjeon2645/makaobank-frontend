import { apiService } from '../services/ApiService';

export default class BankStore {
  constructor() {
    this.accountNumber = '';
    this.name = '';
    this.amount = 0;
    this.transactions = [];
  }

  // TODO. 서버에서 가져와야 진짜!
  async login({ accountNumber, password }) {
    try {
    // apiService가 왜 등장하는지 솔직히 잘 이해가 안됨.
      const { accessToken, name, amount } = await apiService.postSession({
        accountNumber, password,
      });

      this.name = name;
      this.amount = amount;

      // 로그인을 하기 때문에 당연히 액세스토큰은 보내줘야지?
      // 에러에 빈 내용을 준건 accessToken과 싱크를 맞추기 위해서.
      return accessToken;
    } catch (e) {
      return '';
    }
  }
}

export const bankStore = new BankStore();
