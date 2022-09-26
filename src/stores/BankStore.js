export default class BankStore {
  constructor() {
    this.accountNumber = '';
    this.name = '';
    this.amount = 0;
    this.transactions = [];
  }

  login({ accountNumber, password }) {
    // TODO. 서버에서 가져와야 진짜!
    if (accountNumber !== '1234') {
      return;
    }
    this.name = 'tester';
    this.amount = 100_000;
  }
}
