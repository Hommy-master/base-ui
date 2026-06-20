import { type BaseResponse, request } from './request';

export type UserLoginParams = { phone: string; pass: string };

interface UserCheckResult {
  exists: boolean; // 用户名是否存在
}

export enum UserRole {
  // 普通用户
  Normal = 'normal',
  // 智能体创作者，能添加智能体，赚取收入
  Creater = 'creator',
  // 管理员，能管理所有智能体，包括删除和编辑
  Admin = 'admin',
}

export interface UserLoginResult {
  id: string; // 用户ID
  name: string; // 用户名
  user_type: number;
  points: number; // 积分
  apiKey: string;
  role: UserRole;
  vipLevel: number; // 会员等级 0-普通用户，1-普通会员，2- SVIP，3- SVIP
  vipExpireAt: number; // 会员过期时间
  token?: string; // 认证令牌
}

export interface QRcodeResult {
  ticket: string;
}

export interface QRcodeLoginResult {
  user: UserLoginResult;
}

export async function checkUserName(phone: string): Promise<BaseResponse<UserCheckResult>> {
  return await request(`/openapi/v1/user/check`, {
    method: 'get',
    params: { phone },
  });
}

export async function pwdlogin(params: UserLoginParams): Promise<BaseResponse<UserLoginResult>> {
  return await request(`/openapi/v1/user/auth/login`, {
    method: 'post',
    data: params,
  });
}

export async function getPhoneCode(phone: string) {
  return await request(`/openapi/v1/user/auth/sms`, {
    method: 'post',
    data: {
      phone,
    },
  });
}

export async function fetchQRCode(): Promise<BaseResponse<QRcodeResult>> {
  return await request(`/openapi/v1/user/auth/qrcode?sceneID=80001`, {
    method: 'get',
  });
}

export async function fetchQRCodeLogin(ticket: string): Promise<BaseResponse<UserLoginResult>> {
  return await request(`/openapi/v1/user/auth/qrcode/status?ticket=${ticket}&sceneID=80001`, {
    method: 'get',
  });
}
