import React from 'react';
import TagManager from 'react-gtm-module';

// 初始化 GTM
export const initGTM = (gtmId: string) => {
  // 确保 dataLayer 数组存在
  window.dataLayer = window.dataLayer || [];

  TagManager.initialize({
    gtmId,
    dataLayer: {
      platform: 'web',
      reactVersion: React.version,
    },
  });
};

// 跟踪事件的类型安全方法
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (!window.dataLayer) {
    console.warn('dataLayer not initialized');
    return;
  }

  window.dataLayer.push({
    event: eventName,
    ...params,
  });
};

// 扩展 Window 接口确保类型安全
declare global {
  interface Window {
    dataLayer: Array<{
      event: string;
      [key: string]: any;
    }>;
  }
}
