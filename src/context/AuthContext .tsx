import { createContext, useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserLoginResult } from '~/services/login';
import { getUserInfo } from '~/services/user';

import { getLoginModalStore } from '~/components/LoginModal/store';

// 不需要检测是否认证的白名单
// 比如登录页、首页、404等
const WHITE_LIST = ['/home', '/'];

// 登录状态事件名称
export const LOGIN_CHANGE_EVENT = 'loginStateChange';

interface AuthContextType {
  loading: boolean;
  userInfo: Partial<UserLoginResult>;
  updateAuthInfo: (tokenData: UserLoginResult) => void;
  fetchUserInfo: (id: string) => Promise<void>;
  logout: () => void;
}

export const AUTH_TOKEN_KEY = 'auth_token';

// 创建上下文
// 该上下文将用于提供身份验证状态和登录/注销功能
const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userInfo, setUserInfo] = useState<Partial<UserLoginResult>>({});
  const [loading, setLoading] = useState(true);

  // 初始化时检查登录状态
  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      setUserInfo(JSON.parse(token));
    } else if (!WHITE_LIST.includes(location.pathname)) {
      // logout();
    }
    setLoading(false);
  }, []);

  // 更新认证信息内容
  const updateAuthInfo = (tokenData: Partial<UserLoginResult>) => {
    let oldData = {};
    try {
      const val = localStorage.getItem(AUTH_TOKEN_KEY);
      oldData = val ? JSON.parse(val) : {};
    } catch (error) {
      console.error('auth_token JSON old 失败:', error);
    }
    try {
      const newData = {
        ...oldData,
        ...tokenData,
      };
      localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(newData));
      setUserInfo(newData);
      getLoginModalStore().open = false;
      // 触发登录状态事件，通知其他组件更新
      const event = new CustomEvent(LOGIN_CHANGE_EVENT, { detail: { ...newData, state: 'login' } });
      window.dispatchEvent(event);
    } catch (error) {
      console.error('auth_token JSON 失败:', error);
    }
  };

  const fetchUserInfo = async (id: string) => {
    const { code, data } = await getUserInfo(id);
    if (code === 0 && data) {
      // 更新旧的local
      updateAuthInfo(data);
    }
  };

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    setUserInfo({});

    // TODO 通知接口注销登录

    // 触发登录状态事件，通知其他组件更新
    const event = new CustomEvent(LOGIN_CHANGE_EVENT, { detail: { state: 'logout' } });
    window.dispatchEvent(event);

    // 跳转到登录
    getLoginModalStore().open = true;
  };

  const value: AuthContextType = {
    loading,
    userInfo,
    logout,
    updateAuthInfo,
    fetchUserInfo,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

// 路由守卫组件
export function ProtectedRoute() {
  // 不需要检测是否认证，默认放开，特定要登录才可以访问的页面自行处理
  // const location = useLocation();

  // const { userInfo } = useAuth();

  // return userInfo?.id ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
  return <Outlet />;
}

// 自定义hook
export function useAuth() {
  return useContext(AuthContext);
}
