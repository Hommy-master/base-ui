import axios, { AxiosError } from 'axios';
import type { MessageInstance } from 'antd/es/message/interface';
import { NavigateFunction } from 'react-router-dom';
import { message as messageApi } from 'antd';

class AspaceError extends Error {
  errorMessage: string;
  errorCode: number;
  resp: AxiosError;
  constructor(message: string, code: number, resp: AxiosError) {
    super(message);
    this.errorCode = code;
    this.errorMessage = message;
    this.name = 'AspaceError';
    this.resp = resp;
  }
}

export const setupAxiosInterceptors = (navigate: NavigateFunction) => {
  const setupIndex = axios.interceptors.response.use(
    (response) => {
      // 成功响应时的逻辑
      // console.log('响应成功：', response);
      // 例如统一处理数据
      // if (response.data && !response.data.success) {
      //     // 可以根据后端返回的 code 字段统一处理异常
      //     // console.error('业务逻辑错误：', response.data.message);
      //     return Promise.reject(new Error(response.data.message));
      // }
      return response; // 返回响应数据（可做进一步封装）
    },
    (error): Promise<AspaceError> | void => {
      // 响应失败时的逻辑
      // console.error('响应错误：', error, Object.prototype.toString.call(error));
      let message: string;
      let code: number;
      if (error.response) {
        if (error.response.status === 401) {
          // 没有会话信息，跳转到登录页面
          const { pathname } = window.location;
          if (/^\/s\/[^/]+$/.test(pathname)) {
            navigate(`${pathname}/home`);
            return;
          }
        }
        // 处理 HTTP 状态码错误
        try {
          const resp = error.response.data;
          message = resp.errorCode ? `${resp.errorMessage}(${resp.errorCode})` : '请求响应错误！';
          code = resp.errorCode ?? 500;
        } catch (e) {
          message = '请求响应未知错误！';
          code = 500;
        }
      } else if (error.request) {
        // 请求未收到响应
        message = '请求未收到响应！';
        code = 500;
      } else {
        // 设置请求时发生错误
        message = '请求设置错误！';
        code = 500;
      }

      // messageApi.error(message);
      return Promise.reject(new AspaceError(message, code, error));
    }
  );

  return () => {
    axios.interceptors.response.eject(setupIndex);
  };
};
