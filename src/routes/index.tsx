import { Suspense, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import { setupHttpInterceptors } from '~/services/http';
import { ProtectedRoute } from '~/context/AuthContext';
import { AuthLayout, MainLayout } from '~/layouts';
import GtmRouterTracker from './gtmRouterTracker';
import NotFound from '~/pages/404';
import { LoginRoute, HomePage, RoutesCfg } from './const';

const PageFallback = () => (
  <div className="flex size-full items-center justify-center">
    <Spin size="large" />
  </div>
);

const AppRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const teardown = setupHttpInterceptors(navigate);
    return teardown;
  }, [navigate]);

  return (
    <>
      <GtmRouterTracker />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginRoute />} />
          </Route>

          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route element={<ProtectedRoute />}>
              {RoutesCfg.map((route) => {
                if (!route.element || route.path === '/') return null;
                return <Route key={route.path} path={route.path} element={<route.element />} />;
              })}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
