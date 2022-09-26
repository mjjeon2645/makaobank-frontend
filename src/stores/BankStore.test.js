import server from '../testServer';
import BankStore from './BankStore';

// 1. 직접 모킹
// jest.mock('../services/ApiService', () => ({
//   apiService: {
//     async postSession({ accountNumber, password }) {
//       if (accountNumber === '1234' && password === 'password') {
//         return {
//           accessToken: 'ACCESS.TOKEN',
//           name: 'tester',
//           amount: 100_000,
//         };
//       }
//       throw new Error('Login failed');
//     },
//   },
// }));

// 2. __mocks__ 폴더에 완벽한 모킹파일이 있으니 이렇게 간단하게 써줘도 됨
// jest.mock('../services/ApiService');

const context = describe;

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe('BankStore', () => {
  let bankStore;

  beforeEach(() => {
    bankStore = new BankStore();
  });
  describe('login', () => {
    context('with correct account number and password', () => {
      it('loads account information', async () => {
        await bankStore.login({ accountNumber: '1234', password: 'password' });

        expect(bankStore.name).toBe('tester');
        expect(bankStore.amount).toBe(100_000);
      });
    });

    context('with incorrect account number', () => {
      it('loads account information', async () => {
        await bankStore.login({ accountNumber: 'xxx', password: 'password' });

        expect(bankStore.name).toBeFalsy();
        expect(bankStore.amount).toBe(0);
      });
    });
  });

  describe('fetch account information', () => {
    it('sets account information', async () => {
      await bankStore.fetchAccount();

      expect(bankStore.name).toBe('tester');
      expect(bankStore.accountNumber).toBe('1234');
      expect(bankStore.amount).toBe(100_000);
    });
  });
});
