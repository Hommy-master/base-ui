import { lazy } from 'react';
import type { IconType } from 'react-icons';
import { FaHome } from 'react-icons/fa';

export interface RouteCfgType {
  path: string;
  text: string;
  icon: IconType;
  element: React.FC | null;
  href?: string; // 外部链接
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
  }[]; // 下拉菜单链接
}

export const LoginRoute = lazy(() => import('~/pages/Login'));

export const RoutesCfg: RouteCfgType[] = [
  {
    path: '/home',
    text: '首页',
    icon: FaHome,
    badgeProps: {
      text: '新',
    },
    element: lazy(() => import('~/pages/Home')),
    active: true,
  },
];
