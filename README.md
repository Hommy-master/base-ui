# Base UI

基于 **React 18 + Vite 5 + TypeScript + Ant Design 5 + Tailwind CSS** 的前端项目模板。

## 快速开始

```bash
pnpm install
cp .env.example .env   # 按需修改配置
pnpm dev
```

## 常用命令

| 命令             | 说明                        |
| ---------------- | --------------------------- |
| `pnpm dev`       | 启动开发服务器（端口 8008） |
| `pnpm dev:mock`  | 启用 Mock 数据开发          |
| `pnpm build`     | 生产构建                    |
| `pnpm preview`   | 预览构建产物                |
| `pnpm lint`      | ESLint 检查                 |
| `pnpm typecheck` | TypeScript 类型检查         |

## 环境变量

复制 `.env.example` 为 `.env` 后修改：

| 变量                      | 说明                    | 默认值                |
| ------------------------- | ----------------------- | --------------------- |
| `VITE_APP_TITLE`          | 应用名称                | Base UI               |
| `VITE_APP_DESCRIPTION`    | 应用描述                | -                     |
| `VITE_SITE_URL`           | 站点 URL                | http://localhost:8008 |
| `VITE_NAV_LAYOUT`         | 导航布局 `top` / `left` | top                   |
| `VITE_API_PROXY_TARGET`   | 开发代理目标            | http://127.0.0.1:3000 |
| `VITE_GTM_ID`             | Google Tag Manager ID   | 空（不启用）          |
| `VITE_ENABLE_FLOAT`       | 是否显示悬浮客服        | true                  |
| `VITE_AUTH_SCENE_ID`      | 扫码登录场景 ID         | default               |
| `VITE_CONTACT_QRCODE_URL` | 客服二维码图片 URL      | 空（不显示二维码）    |
| `VITE_SUPPORT_TITLE`      | 客服悬浮窗标题          | `{应用名} 技术支持`   |

## 登录流程

未登录访问受保护路由、会话过期（401 / 业务码 12010）、退出登录，均统一跳转 `/login` 页面。

## 项目结构

```
src/
├── utils/config.ts     # 应用配置（读取 .env）
├── components/         # 通用组件（Header、Nav、LoginModal…）
├── context/            # React Context（AuthContext）
├── hooks/              # 自定义 Hooks
├── pages/              # 页面（Home、Login、404…）
├── routes/             # 路由 & 菜单配置
├── services/           # API 请求层
├── style/              # 全局 CSS
└── utils/              # 工具函数
```

## 新增页面

1. 在 `src/pages/` 创建页面组件
2. 在 `src/routes/const.tsx` 的 `RoutesCfg` 追加配置（path、菜单名、icon、懒加载组件）
3. 受保护路由需登录后访问（`ProtectedRoute` 守卫）

## 导航布局

通过 `VITE_NAV_LAYOUT` 切换桌面端导航：

- `top` — 顶部导航
- `left` — 左侧侧边栏

移动端统一使用底部导航。

## 技术栈

- React 18 + React Router 6
- Vite 5 + SWC
- Ant Design 5
- Tailwind CSS 3
- Axios
- Valtio（轻量状态管理）
- Vitest + ESLint + Prettier + Husky
