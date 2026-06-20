import axios, { AxiosRequestConfig } from 'axios';
import { AUTH_TOKEN_KEY } from '~/context/AuthContext';
import { getLoginModalStore } from '~/components/LoginModal/store';

export interface BaseResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
}

const redirectToLogin = (() => {
  let redirectId: ReturnType<typeof setTimeout> | null = null;

  function redirect() {
    if (redirectId) {
      clearTimeout(redirectId);
    }

    redirectId = setTimeout(() => {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      // 使用getLoginModalStore打开登录模态框
      getLoginModalStore().open = true;
      redirectId = null;
    }, 1000);
  }

  return redirect;
})();

axios.interceptors.request.use(
  (config) => {
    const tokenData = localStorage.getItem(AUTH_TOKEN_KEY);
    if (tokenData) {
      try {
        const parsedToken = JSON.parse(tokenData);
        if (parsedToken?.token) {
          config.headers.Authorization = `Bearer ${parsedToken.token}`;
        }
      } catch (error) {
        console.error('解析 token 数据失败:', error);
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export async function request<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
  const { data } = await axios.request<T>({ url, ...options });

  const errorCode = (data as BaseResponse)?.code || 0;
  if (errorCode === 12010) {
    redirectToLogin();
  }

  return data;
}
