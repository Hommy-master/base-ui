# Base UI

基于 **React 18 + Vite 5 + TypeScript + Ant Design 5 + Tailwind CSS** 的前端项目模板。

## 快速开始

```bash
pnpm install
cp .env.example .env   # 按需修改配置
pnpm dev
```

需要干净起点时，可使用最小化配置：

```bash
cp .env.minimal.example .env
```

## 常用命令

| 命令             | 说明                        |
| ---------------- | --------------------------- |
| `pnpm dev`       | 启动开发服务器（端口 8008） |
| `pnpm dev:mock`  | 启用 Mock 数据开发          |
| `pnpm build`     | 生产构建                    |
| `pnpm preview`   | 预览构建产物                |
| `pnpm lint`      | ESLint 检查                 |
| `pnpm lint:css`  | Stylelint 检查 CSS          |
| `pnpm typecheck` | TypeScript 类型检查         |
| `pnpm test:run`  | 运行单元测试（单次）        |
| `pnpm test`      | 运行单元测试（watch 模式）  |

## 环境变量

复制 `.env.example` 为 `.env` 后修改：

| 变量                      | 说明                      | 默认值                |
| ------------------------- | ------------------------- | --------------------- |
| `VITE_APP_TITLE`          | 应用名称                  | Base UI               |
| `VITE_APP_DESCRIPTION`    | 应用描述                  | -                     |
| `VITE_SITE_URL`           | 站点 URL                  | http://localhost:8008 |
| `VITE_NAV_LAYOUT`         | 导航布局 `top` / `left`   | top                   |
| `VITE_API_PREFIX`         | API 路径前缀              | `/openapi`            |
| `VITE_API_PROXY_TARGET`   | 开发代理目标              | http://127.0.0.1:3000 |
| `VITE_GTM_ID`             | Google Tag Manager ID     | 空（不启用）          |
| `VITE_ENABLE_FLOAT`       | 是否显示悬浮客服          | true                  |
| `VITE_AUTH_SCENE_ID`      | 扫码登录场景 ID           | default               |
| `VITE_LOGIN_MODE`         | 登录方式 `page` / `modal` | page                  |
| `VITE_CONTACT_QRCODE_URL` | 客服二维码图片 URL        | 空（不显示二维码）    |
| `VITE_SUPPORT_TITLE`      | 客服悬浮窗标题            | `{应用名} 技术支持`   |

## 自定义 API 前缀

默认 API 前缀为 `/openapi`，请求路径在 `services/` 中写相对路径（如 `/v1/user`），由 `src/utils/api.ts` 自动拼接。

修改前缀只需两处保持一致：

1. `.env` 中设置 `VITE_API_PREFIX=/your-prefix`
2. `vite.config.mts` 会通过该变量配置 dev proxy（无需手改）

Mock 路由通过 `mock/_config.ts` 自动读取同一环境变量，无需手动同步。

```ts
// services/user.ts — 只需写相对路径
return await request('/v1/user', { method: 'get', params: { id } });
```

生产环境需在 Nginx / 网关层将 `{API_PREFIX}/*` 反向代理到后端。

## Mock 数据

| 场景      | 命令 / 配置                                                                       |
| --------- | --------------------------------------------------------------------------------- |
| 启用 Mock | `.env` 中 `VITE_MOCK=true`，或运行 `pnpm dev:mock`                                |
| 关闭 Mock | `pnpm dev`（不带 mock 环境变量）                                                  |
| Mock 文件 | `mock/` 目录，入口见 `mock/user.ts`                                               |
| 新增 Mock | 在 `mock/` 追加路由，URL 使用 `` `${API_PREFIX}/v1/...` ``（前缀自动读取 `.env`） |

Mock 仅在开发环境生效，生产构建不会打包 mock 代码。

## 登录方式

通过 `VITE_LOGIN_MODE` 切换，所有入口（导航栏、受保护路由、401、会话过期、退出登录）统一走 `openLogin()`：

| 模式       | 值             | 行为                                            |
| ---------- | -------------- | ----------------------------------------------- |
| 独立登录页 | `page`（默认） | 跳转 `/login`，带 `LoginMask` 背景              |
| 弹窗登录   | `modal`        | 在 `MainLayout` 挂载 `LoginModal`，不离开当前壳 |

```bash
# 使用弹窗登录
VITE_LOGIN_MODE=modal
```

`modal` 模式下访问 `/login` 会自动重定向到首页并打开弹窗；登录成功后跳回 `returnTo` 记录的来源路径。

## 登录流程

未登录访问受保护路由、会话过期（401 / 业务码 12010）、退出登录，均通过 `src/utils/loginFlow.ts` 按上述模式处理。

## 最小化配置

复制 `.env.minimal.example` 为 `.env` 可快速关闭可选功能：

- `VITE_ENABLE_GTM=false` — 关闭 Google Tag Manager
- `VITE_ENABLE_FLOAT=false` — 关闭右下角悬浮客服
- `VITE_GTM_ID=` — 留空

适合 fork 后作为干净起点，再按需逐项开启。

## 项目结构

```
src/
├── layouts/            # 页面布局（MainLayout、AuthLayout）
├── utils/config.ts     # 应用配置（读取 .env）
├── utils/api.ts        # API 路径拼接
├── components/         # 通用组件（Header、Nav、LoginModal…）
├── context/            # React Context（AuthContext）
├── hooks/              # 自定义 Hooks
├── pages/              # 页面（Home、Login、404…）
├── routes/             # 路由 & 菜单配置
├── services/           # API 层（http / 业务码 / 会话处理）
├── style/              # 全局 CSS
└── utils/              # 工具函数
```

## 新增受保护页面

1. 在 `src/pages/` 创建页面组件
2. 在 `src/routes/const.tsx` 的 `RoutesCfg` 追加配置：

```tsx
{
  path: '/dashboard',
  text: '仪表盘',
  icon: FaChartBar,
  element: lazy(() => import('~/pages/Dashboard')),
},
```

3. 路由会自动注册为受保护路由（需登录），并出现在导航菜单中
4. 首页 `/` 和 `/login` 不受保护；外链菜单项可设置 `href` 跳过路由注册

## 导航布局

通过 `VITE_NAV_LAYOUT` 切换桌面端导航：

- `top` — 顶部导航
- `left` — 左侧侧边栏

移动端统一使用底部导航。

## 依赖更新

项目已配置 [Dependabot](.github/dependabot.yml)，每周自动提交 npm 与 GitHub Actions 依赖更新 PR。

## 技术栈

- React 18 + React Router 6
- Vite 5 + SWC
- Ant Design 5
- Tailwind CSS 3
- Axios + lodash-es
- Valtio（轻量状态管理）
- Vitest + Stylelint + ESLint + Prettier + Husky
