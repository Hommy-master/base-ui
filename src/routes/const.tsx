import { lazy } from 'react';
import type { IconType } from 'react-icons';
import { FaHome } from 'react-icons/fa';

export interface RouteCfgType {
  path: string;
  text: string;
  icon: IconType;
  element: React.FC | null;
  href?: string;
  active?: boolean;
  hideInMenu?: boolean;
  iconProps?: React.ComponentProps<IconType>;
  badgeProps?: {
    text: string;
    color?: string;
  };
  links?: {
    text: string;
    icon: IconType;
    href: string;
  }[];
}

export const LoginRoute = lazy(() => import('~/pages/Login'));
export const HomePage = lazy(() => import('~/pages/Home'));

/** 导航菜单 & 受保护路由配置，新增页面在此追加 */
export const RoutesCfg: RouteCfgType[] = [
  {
    path: '/',
    text: '首页',
    icon: FaHome,
    element: HomePage,
  },
];
