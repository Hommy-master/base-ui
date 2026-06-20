import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    // 获取用户信息 这里有啥需要展示的信息就给过来
    url: '/openapi/v1/user',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: '',
        data: { id: 222, name: 'userName', points: 28 },
      };
    },
  },
  {
    // 【个人中心】-> 【编辑用户】
    // [params] {id: 11111, name: 'new_userName'}
    // [return data] {name: 'new_userName'}
    url: '/openapi/v1/user/update/name',
    method: 'post',
    response: () => {
      return {
        code: 0,
        data: { name: 'New_userName' },
      };
    },
  },
  {
    // 【个人中心】-> 【更新api token】
    // [params] {id: 11111}
    // [return data] {apiKey: 'new_api_token'} // 确定下登录成功的那个apiKey是不是就是这个token
    url: '/openapi/v1/user/update/api_token',
    method: 'post',
    response: () => {
      return {
        code: 0,
        data: { apiKey: '123ac9b4-db22-4199-8b2e-bdbd618d8494' },
      };
    },
  },
  {
    // 【个人中心】-> 【兑换礼品码】
    // [params] {id: 11111, user_type: 1, activation_code: '1111'}
    // [return data]
    url: '/openapi/v1/user/update/exchange_code',
    method: 'post',
    response: () => {
      return {
        code: 0,
        data: {},
      };
    },
  },
] as MockMethod[];
