import { useState, useEffect, useCallback, useMemo } from 'react';
import { debounce } from 'lodash';
import { ScreenBreakpoint } from '~/utils/const';
import { isPhone as isPhoneFunc, isMobile as isMobileFunc } from '~/utils/function';

export const useResponsive = (breakpoint = ScreenBreakpoint) => {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = useCallback(() => {
    // 服务端渲染兼容
    if (typeof window === 'undefined') return false;

    const isMobileView = window.innerWidth < breakpoint;
    setIsMobile(isMobileView);
    return isMobileView;
  }, [breakpoint]);

  const isPhone = useMemo(() => {
    return isPhoneFunc();
  }, [isMobile]);

  useEffect(() => {
    // 添加防抖优化
    const handleResize = debounce(checkMobile, 150);

    // 立即执行一次初始化
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel?.(); // 取消防抖未执行的操作
    };
  }, [checkMobile]);

  return {
    isMobile, 
    isDesktop: !isMobile,
    isPhone,
    breakpoint, // 返回当前使用的断点
  };
};
