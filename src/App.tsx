import { useLocation, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { useEffect, useMemo } from 'react';

import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes';
import { setGlobalNavigate } from './utils/navigation';
import FloatCom from './components/Float';
import LoginModal from './components/LoginModal';
import { MobileBottomNav, SideNav } from './components/Nav';
import { useResponsive } from './hooks';
import { appConfig, isLeftNavLayout } from '~/utils/config';

const { Content } = Layout;

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isPhone } = useResponsive();
  const pathname = location.pathname;
  const showNav = useMemo(() => pathname !== '/login', [pathname]);

  const contentClassName = [
    'zt-app-main',
    showNav ? '' : 'zt-app-main_full',
    isPhone ? 'zt-app-main_mobile' : '',
    showNav && !isPhone && isLeftNavLayout ? 'zt-app-main_with-sider' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <Content className={contentClassName}>
      <AppRoutes />
      {appConfig.enableFloat && showNav && <FloatCom />}
      <LoginModal />
    </Content>
  );

  useEffect(() => {
    setGlobalNavigate(navigate);
    return () => {
      setGlobalNavigate(null);
    };
  }, [navigate]);

  const renderDesktopNav = () => {
    if (isLeftNavLayout) {
      return (
        <Layout hasSider className="zt-app-body">
          <SideNav />
          <Layout>{content}</Layout>
        </Layout>
      );
    }

    return (
      <>
        <Header />
        {content}
      </>
    );
  };

  return (
    <AuthProvider>
      <Layout
        className={`zt-app ${isLeftNavLayout ? 'zt-app--left-nav' : 'zt-app--top-nav'} ${isPhone ? 'zt-app--mobile' : ''}`}
      >
        {showNav && (isPhone ? <MobileBottomNav /> : renderDesktopNav())}
        {(!showNav || isPhone) && content}
      </Layout>
    </AuthProvider>
  );
}

export default App;
