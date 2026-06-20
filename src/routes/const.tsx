import { lazy } from 'react';
import { type Icon, House, IconWeight } from '@phosphor-icons/react';

export interface RouteCfgType {
  path: string;
  text: string;
  icon: Icon;
  element: React.FC | null;
  href?: string; // 外部链接
  active?: boolean;
  hideInMenu?: boolean;
  iconProps?: {
    weight?: IconWeight;
  };
  badgeProps?: {
    text: string;
    color?: string;
  };
  links?: {
    text: string;
    icon: Icon;
    href: string;
  }[]; // 下拉菜单链接
}

export const LoginRoute = lazy(() => import('~/pages/Login'));

export const RoutesCfg: RouteCfgType[] = [
  {
    path: '/home',
    text: '首页',
    icon: House,
    badgeProps: {
      text: '新',
    },
    element: lazy(() => import('~/pages/Home')),
    active: true,
  },
];
