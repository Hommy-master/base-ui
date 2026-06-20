import logoUrl from '~/assets/images/logo.png';
import { UserRole } from '~/services/login';

export const DefaultIconUrl = logoUrl;

export const THEME_COLOR = '#5c89ff'; // --primary-light

export const USER_TYPE = ['NORMAL', 'VIP', 'SVIP', 'SVIP'];
export const USER_TYPE_TEXT = ['普通用户', 'VIP', 'SVIP', 'SVIP'];

// 判断是否为开发环境
export const isDevelopment = import.meta.env.DEV || process.env.NODE_ENV === 'development';

// 判断是否启用Mock
export const isMockEnabled = !!import.meta.env.VITE_MOCK;

// 判断是否为生产环境
export const isProduction = import.meta.env.PROD || process.env.NODE_ENV === 'production';

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

export const PluginIDHashMap: any = {
  // 剪映小助手
  '7522412867740565513': '7576197995168022547', // create_draft
  // 剪映小助手数据生成器
  '7475829177439109155': '7576197995168022547', // add_images
  // 视频合成_剪映小助手
  '7457837925833801768': '7576197995168022547', // str_list_to_objs

  // SC剪映小助手 替换JC
  '7513599192976359433': '7576197995168022547',
  // SC剪映小助手数据生成器 替换JC
  '7513599695369945107': '7576197995168022547',
  // SC视频合成插件 替换JC
  // '7495336137377153039': '7576197995168022547', 这个不替换，会出现插件找不到
  // SC数据生成器 替换JC
  // '7496409648803627023': '7576197995168022547',
};
