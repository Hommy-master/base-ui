import axios, { AxiosError } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { AUTH_TOKEN_KEY } from '~/context/AuthContext';

export class AppError extends Error {
  errorMessage: string;
  errorCode: number;
  resp: AxiosError;
  constructor(message: string, code: number, resp: AxiosError) {
    super(message);
    this.errorCode = code;
    this.errorMessage = message;
    this.name = 'AppError';
    this.resp = resp;
  }
}

export const setupAxiosInterceptors = (navigate: NavigateFunction) => {
  const setupIndex = axios.interceptors.response.use(
    (response) => response,
    (error): Promise<AppError> | void => {
      let message: string;
      let code: number;
      if (error.response) {
        if (error.response.status === 401) {
          const { pathname } = window.location;
          if (/^\/s\/[^/]+$/.test(pathname)) {
            navigate(`${pathname}/home`);
            return;
          }
        }
        try {
          const resp = error.response.data;
          message = resp.errorCode ? `${resp.errorMessage}(${resp.errorCode})` : '请求响应错误！';
          code = resp.errorCode ?? 500;
        } catch {
          message = '请求响应未知错误！';
          code = 500;
        }
      } else if (error.request) {
        message = '请求未收到响应！';
        code = 500;
      } else {
        message = '请求设置错误！';
        code = 500;
      }

      return Promise.reject(new AppError(message, code, error));
    }
  );

  return () => {
    axios.interceptors.response.eject(setupIndex);
  };
};
