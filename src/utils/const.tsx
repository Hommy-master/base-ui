import logoUrl from '~/assets/images/logo.png';
import { UserRole } from '~/services/login';

export const DefaultIconUrl = logoUrl;

export const THEME_COLOR = '#5c89ff'; // --primary-light

export const USER_TYPE = ['NORMAL', 'VIP', 'SVIP', 'SVIP'];
export const USER_TYPE_TEXT = ['普通用户', 'VIP', 'SVIP', 'SVIP'];

// 判断是否为开发环境
export const isDevelopment = import.meta.env.DEV ?? process.env.NODE_ENV === 'development';

// 判断是否启用Mock
export const isMockEnabled = !!import.meta.env.VITE_MOCK;

// 判断是否为生产环境
export const isProduction = import.meta.env.PROD ?? process.env.NODE_ENV === 'production';

// 判断用户是否为创作者或在开发环境中
export const isCreatorOrDev = (userRole?: UserRole): boolean => {
  return userRole === UserRole.Creater || isDevelopment;
};

// 小屏自适应分界线（移动设备）
export const ScreenBreakpoint = 992; // 自定义断点

export const G_EmptyStr = '-';

/* eslint-disable-next-line */
export const REGEX = /^[^\/&"?<>#{}%~=\'\[\\\]\|\+]*$/;
export const getRegexDesc = (name: string = '该输入项') => {
  /* eslint-disable-next-line */
  return `${name}不允许包含 \/&"?<>#{}%~=\'\[\\\]\|\+ 等特殊字符`;
};
