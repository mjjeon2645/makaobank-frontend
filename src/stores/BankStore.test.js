import BankStore from './BankStore';

const context = describe;

describe('BankStroe', () => {
  describe('login', () => {
    context('with correct account number and password', () => {
      it('loads account information', () => {
        const bankStore = new BankStore();

        bankStore.login({ accountNumber: '1234', password: 'password' });

        expect(bankStore.name).toBe('tester');
        expect(bankStore.amount).toBe(100_000);
      });
    });

    context('with incorrect account number', () => {
      it('loads account information', () => {
        const bankStore = new BankStore();

        bankStore.login({ accountNumber: 'xxx', password: 'password' });

        expect(bankStore.name).toBeFalsy();
        expect(bankStore.amount).toBe(0);
      });
    });
  });
});
