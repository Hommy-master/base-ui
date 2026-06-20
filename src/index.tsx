import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
// import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
// import 'antd/dist/reset.css';
import zhCN from 'antd/locale/zh_CN'; // 引入中文语言包
import './style/index.less';

import theme from './theme';
import App from './App';
import { initGTM } from './utils/gtm';

initGTM('G-6JZ03E6DEL'); // 初始化 GTM

// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* layer 样式优先级降权 */}
      {/* <StyleProvider layer> */}
      <ConfigProvider locale={zhCN} theme={theme}>
        <App />
      </ConfigProvider>
      {/* </StyleProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
