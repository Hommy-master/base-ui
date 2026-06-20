
import { BaseResponse, request } from './request';

export interface Order {
  qrCodeURL: string; // 二维码链接
  price: number; // 金额
  orderNO: string; // 订单号
  expire: number; // 过期时间
}

export type AmountType = 'PLUGIN_20' | 'PLUGIN_50' | 'PLUGIN_100' | 'PLUGIN_200' | 'PLUGIN_500' | 'CUSTOM' | 'PLUGIN_1000';

export type VIPType = 'SVIP_YEAR' | 'SVIP_MONTH' | 'VIP_YEAR';

export interface AmountObject {
  key: AmountType | VIPType;
  bonus?: number,
  value: number
}

// 充值结果类型
export type PayStatus = 'NOTPAY' | 'PAYED' | 'CANCEL' | 'REFUND' | 'EXPIRE';

export interface BalanceList {
  id: number;
  orderNO: string;
  description: string;
  optAt: string;
  points: number;
}

export interface BalanceLog {
  logs: BalanceList[];
}


export const fetchCreateOrder = async ({payMethod = 'wechat', ...data}: any) : Promise<BaseResponse<Order>>=> {
  return await request(`/openapi/v1/user/pay/create-order`, {
    method: 'post',
    data: { payMethod, ...data },
  });
}

export const fetchPayment = async (orderNO: string) : Promise<BaseResponse>=> {
  return await request(`/openapi/v1/user/pay/check-payment?orderNO=${orderNO}`, {
    method: 'get'
  });
}

export const fetchBalanceLog = async () : Promise<BaseResponse<BalanceLog>>=> {
  return await request(`/openapi/v1/user/balance/log`, {
    method: 'get'
  });
}
