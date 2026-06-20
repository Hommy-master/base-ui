import { message } from 'antd';
import axios, { AxiosRequestConfig } from 'axios';
import { AUTH_TOKEN_KEY } from '~/context/AuthContext ';
import { getLoginModalStore } from '~/components/LoginModal/store';

export interface BaseResponse<T = any> {
  code: number; // 状态码
  message: string; // 服务端消息
  data: T; // 实际业务数据
}

const redirectToLogin = (() => {
  let redirectId: any = null;

  // 防止重复跳转
  function redirect() {
    // if (!redirectId) {
    //   message.error('会话已过期，请重新登录！');
    // }
    if (redirectId) {
      clearTimeout(redirectId);
    }

    redirectId = setTimeout(() => {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      // 使用getLoginModalStore打开登录模态框
      getLoginModalStore().open = true;
      redirectId = 0;
    }, 1000);
  }

  return redirect;
})();

// 设置请求拦截器，添加Authorization头部
axios.interceptors.request.use(
  (config) => {
    const tokenData = localStorage.getItem(AUTH_TOKEN_KEY);
    if (tokenData) {
      try {
        const parsedToken = JSON.parse(tokenData);
        // 从解析的token数据中获取token值
        if (parsedToken && parsedToken.token) {
          // 添加Authorization头部，格式为 "Bearer <token>"
          config.headers.Authorization = `Bearer ${parsedToken.token}`;
        }
      } catch (error) {
        console.error('解析token数据失败:', error);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function request<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
  const { data } = await axios.request<T>({ url, ...options });

  //@ts-ignore 处理错误状态码
  const errorCode = data?.code || 0;
  switch (errorCode) {
    // 需要重新登录
    case 12010:
      redirectToLogin();
      break;

  }
  return data;
}
