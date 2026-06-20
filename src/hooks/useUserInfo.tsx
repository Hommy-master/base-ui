import { message } from 'antd';
import { useEffect, useCallback } from 'react';
import { useAuth } from '~/context/AuthContext ';
import { getUserInfo } from '~/services/user';

interface Props {
  immediate?: boolean;
}

export function useUserInfo({ immediate = true }: Props = {}) {
  const { userInfo, updateAuthInfo, logout } = useAuth();

  const errorLogout = (msg = '') => {
    msg && message.error(msg);
    logout();
    return null;
  };

  const fetchUser = useCallback(async () => {
    if (!userInfo?.id) {
      return errorLogout();
    }

    const { code, data, message: msg } = await getUserInfo(userInfo.id);
    if (code !== 0) {
      return errorLogout(msg);
    }
    // 更新上下文中的用户信息
    updateAuthInfo(data);
  }, [userInfo?.id, updateAuthInfo]);

  // 手动触发获取
  const execute = () => fetchUser();

  // 自动执行逻辑
  useEffect(() => {
    if (immediate) {
      fetchUser();
    }
  }, [immediate]);

  return {
    userInfo,
    execute,
  };
}
