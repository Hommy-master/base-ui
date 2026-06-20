import { MockMethod } from 'vite-plugin-mock';
import { API_PREFIX } from './_config';

export default [
  {
    url: `${API_PREFIX}/v1/user`,
    method: 'get',
    response: () => ({
      code: 0,
      message: '',
      data: { id: '222', name: 'userName', token: 'mock-token' },
    }),
  },
  {
    url: `${API_PREFIX}/v1/user/update/name`,
    method: 'post',
    response: () => ({
      code: 0,
      data: { name: 'New_userName' },
    }),
  },
  {
    url: `${API_PREFIX}/v1/user/update/api_token`,
    method: 'post',
    response: () => ({
      code: 0,
      data: { apiKey: 'mock-api-key' },
    }),
  },
  {
    url: `${API_PREFIX}/v1/user/update/exchange_code`,
    method: 'post',
    response: () => ({
      code: 0,
      data: {},
    }),
  },
  {
    url: `${API_PREFIX}/v1/user/auth/qrcode`,
    method: 'get',
    response: () => ({
      code: 0,
      data: { ticket: 'mock-qrcode-ticket' },
    }),
  },
  {
    url: `${API_PREFIX}/v1/user/auth/qrcode/status`,
    method: 'get',
    response: () => ({
      code: 0,
      data: { id: '222', name: 'userName', token: 'mock-token' },
    }),
  },
] as MockMethod[];
