import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginModal from '~/components/LoginModal';
import LoginMask from '~/components/LoginMask';
import { useAppSEO } from '~/hooks/useAppSEO';
import { useAuth } from '~/context/AuthContext';
import { getLoginModalStore } from '~/components/LoginModal/store';

import './index.css';

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userInfo } = useAuth();

  useAppSEO({
    title: '登录',
    path: '/login',
    description: '登录您的账户',
    robots: 'noindex, nofollow',
    twitterCard: 'summary',
  });

  useEffect(() => {
    getLoginModalStore().open = true;
  }, []);

  useEffect(() => {
    if (userInfo?.id) {
      const from = (location.state as { from?: { pathname?: string } })?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [userInfo?.id, location.state, navigate]);

  return (
    <div className="login-page relative">
      <LoginMask />
      <div className="gradient-overlay" />
      <LoginModal />
    </div>
  );
};

export default LoginPage;
