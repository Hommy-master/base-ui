import { useLocation, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';

import Header from './components/Header';
import { AuthProvider } from './context/AuthContext ';
import AppRoutes from './routes';
import { useEffect, useMemo } from 'react';
import { setGlobalNavigate } from './utils/navigation';
import FloatCom from './components/Float';
import LoginModal from './components/LoginModal';
import { MobileBottomNav } from './components/Nav';
import { useResponsive } from './hooks';

const { Content } = Layout;

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isPhone } = useResponsive();
  const pathname = location.pathname;
  const showHeader = pathname !== '/login';
  const isExternalFeatures = pathname === '/external-features';

  const _Content = () => {
    return <Content className={`zt-app-main ${showHeader ? '' : 'zt-app-main_full'} ${isExternalFeatures ? 'zt-app-main_external' : ''} ${isPhone ? 'zt-app-main_mobile' : ''}`}>
      <AppRoutes />
      {!isExternalFeatures && <FloatCom />}
      <LoginModal />
    </Content>;
  };

  const showNav = useMemo(() => {
    return (showHeader && !isExternalFeatures);
  }, [isExternalFeatures, showHeader]);

  // 设置全局导航函数
  useEffect(() => {
    setGlobalNavigate(navigate);
    // 清理函数
    return () => {
      setGlobalNavigate(null);
    };
  }, [navigate]);
  return (
    <AuthProvider>
      <Layout className="zt-app">
        {showNav && (isPhone ? <MobileBottomNav /> : <Header />)}
        {_Content()}
      </Layout>
    </AuthProvider>
  );
}

export default App;
