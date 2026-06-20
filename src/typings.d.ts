declare module "slash2";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";
declare module "omit.js";
declare module "numeral";
declare module "@antv/data-set";
declare module "lodash";
declare module "clsx";
declare module "mockjs";
declare module "react-fittext";
declare module "bizcharts-plugin-slider";
declare module "react-syntax-highlighter";
declare module "react-syntax-highlighter/dist/esm/styles/prism";
declare module "rehype-raw";

// preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design Dedicated environment variable, please do not use it in your project.
declare let ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
  | "site"
  | undefined;

declare module 'react-gtm-module' {
  interface TagManagerArgs {
    gtmId: string;
    dataLayer?: Record<string, any>;
    auth?: string;
    preview?: string;
  }

  interface DataLayerArgs {
    dataLayer: Record<string, any>;
  }

  const TagManager: {
    initialize(args: TagManagerArgs): void;
    dataLayer(args: DataLayerArgs): void;
  };

  export default TagManager;
}

interface ImportMetaEnv {
  /** 应用运行环境，在 .env 文件中定义 */
  readonly VITE_APP_ENV?: 'test' | 'dev' | 'pre' | 'prod';
  // 如果有其他自定义变量，继续添加：
  // readonly VITE_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  dataLayer: Array<{
    event: string;
    [key: string]: any;
  }>;
}
