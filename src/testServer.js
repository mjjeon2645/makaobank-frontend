/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import config from './config';

const baseUrl = config.apiBaseUrl;

// testServer 만드는 곳 이해안감. 공부하기.
const server = setupServer(
  rest.post(`${baseUrl}/session`, async (req, res, ctx) => {
    const { accountNumber, password } = await req.json();
    if (accountNumber === '1234' && password === 'password') {
      return res(ctx.json({
        accessToken: 'ACCESS.TOKEN',
        name: 'tester',
        amount: 100_000,
      }));
    }
    return res(ctx.status(400));
  }),
);

export default server;
