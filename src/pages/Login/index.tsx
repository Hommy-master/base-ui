import { useEffect } from 'react';
import LoginModal from '~/components/LoginModal';
import LoginMask from '~/components/LoginMask';
import { useAppSEO } from '~/hooks/useAppSEO';

import './index.css';

const LoginPage = () => {
  useAppSEO({
    title: '登录',
    path: '/login',
    description: '登录您的账户',
    robots: 'noindex, nofollow',
    twitterCard: 'summary',
  });

  useEffect(() => {
    import('~/components/LoginModal/store').then(({ getLoginModalStore }) => {
      getLoginModalStore().open = true;
    });
  }, []);

  return (
    <div className="login-page relative">
      <LoginMask />
      <div className="gradient-overlay" />
      <LoginModal />
    </div>
  );
};

export default LoginPage;
