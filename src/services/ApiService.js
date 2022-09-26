/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class ApiService {
  async postSession({ accountNumber, password }) {
    const url = `${baseUrl}/session`;
    const { data } = await axios.post(url, { accountNumber, password });

    return {
      accessToken: data.accessToken,
      name: data.name,
      amount: data.amount,
    };
  }

  async fetchAccount() {
    const url = `${baseUrl}/accounts/me`;

    // TODO. access token을 헤더로 넘겨줄 것
    const { data } = await axios.get(url);

    return {
      name: data.name,
      accountNumber: data.accountNumber,
      amount: data.amount,
    };
  }
}

export const apiService = new ApiService();
