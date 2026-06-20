import { Suspense, useEffect } from 'react';

import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { setupAxiosInterceptors } from '~/requestError';
import { ProtectedRoute } from '~/context/AuthContext ';
import GtmRouterTracker from './gtmRouterTracker';

import Home from '~/pages/Home';

import { LoginRoute, RoutesCfg } from './const';

const AppRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const teardown = setupAxiosInterceptors(navigate);
    return teardown;
  }, []);
  return (
    // 路由组件使用lazy加载时，必须配合Suspense使用，否则切换路由页面时会报错
    // 参考：https://reactrouter.com/en/main/route/route#suspense
    <Suspense>
      <Routes>
        {/* 公开路由 */}
        <Route path="/login" element={<LoginRoute />} />

        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/*" element={<GtmRouterTracker />} />
        <Route path="/" element={<Home />} />

        {/* 需要登录的受保护路由 */}
        <Route element={<ProtectedRoute />}>
          {RoutesCfg.map((route) => {
            if (!route.element) return null; // 如果没有组件则不渲染路由
            return <Route key={route.path} path={route.path} element={<route.element />} />;
          })}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
