import { createContext, useContext, useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserLoginResult } from '~/services/login';
import { getUserInfo } from '~/services/user';
import { getLoginModalStore } from '~/components/LoginModal/store';

export const LOGIN_CHANGE_EVENT = 'loginStateChange';

interface AuthContextType {
  loading: boolean;
  userInfo: Partial<UserLoginResult>;
  updateAuthInfo: (tokenData: UserLoginResult) => void;
  fetchUserInfo: (id: string) => Promise<void>;
  logout: () => void;
}

export const AUTH_TOKEN_KEY = 'auth_token';

const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userInfo, setUserInfo] = useState<Partial<UserLoginResult>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      try {
        setUserInfo(JSON.parse(token));
      } catch {
        localStorage.removeItem(AUTH_TOKEN_KEY);
      }
    }
    setLoading(false);
  }, []);

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
      window.dispatchEvent(
        new CustomEvent(LOGIN_CHANGE_EVENT, { detail: { ...newData, state: 'login' } })
      );
    } catch (error) {
      console.error('auth_token JSON 失败:', error);
    }
  };

  const fetchUserInfo = async (id: string) => {
    const { code, data } = await getUserInfo(id);
    if (code === 0 && data) {
      updateAuthInfo(data);
    }
  };

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    setUserInfo({});
    window.dispatchEvent(new CustomEvent(LOGIN_CHANGE_EVENT, { detail: { state: 'logout' } }));
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

export function ProtectedRoute() {
  const location = useLocation();
  const { userInfo, loading } = useAuth();

  if (loading) return null;

  return userInfo?.id ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}

export function useAuth() {
  return useContext(AuthContext);
}
