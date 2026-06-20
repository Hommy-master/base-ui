import { Flex, Layout } from 'antd';
import NavModule from '../Nav';
import Logo_src from '~/assets/images/logo2.png';
import { appConfig } from '~/utils/config';

import './index.css';

const { Header } = Layout;

export default () => {
  return (
    <Header className="zt-header">
      <Flex className="zt-container size-full" gap={8} align="center" justify="space-between">
        <img src={Logo_src} className="ml-2 h-[32px]" alt="logo" />
        <div className="brand-logo">{appConfig.title}</div>
        <NavModule />
      </Flex>
    </Header>
  );
};
