import { UserLoginResult } from './login';
import { BaseResponse, request } from './http';

export async function getUserInfo(id: string): Promise<BaseResponse<UserLoginResult>> {
  return await request('/v1/user', {
    method: 'get',
    params: { id },
  });
}

export async function updateUserName(
  userInfo: Pick<UserLoginResult, 'id' | 'name'>
): Promise<BaseResponse<UserLoginResult>> {
  return await request('/v1/user', {
    method: 'post',
    data: { ...userInfo },
  });
}

/** 获取插件 API 秘钥 */
export async function updateApiToken(
  userInfo: Pick<UserLoginResult, 'id' | 'apiKey'>
): Promise<BaseResponse<UserLoginResult>> {
  return await request('/v1/user', {
    method: 'post',
    data: { ...userInfo },
  });
}

/** 激活码 */
export async function exchangeCode(
  userInfo: Pick<UserLoginResult, 'id'> & { activation_code: string }
): Promise<BaseResponse<UserLoginResult>> {
  return await request('/v1/user/update/exchange_code', {
    method: 'post',
    data: { ...userInfo },
  });
}
