import { Flex, Layout } from 'antd';

const { Header } = Layout;

import NavModule from '../Nav';
import Logo_src from '~/assets/images/logo2.png';

import './index.css';

export default () => {
  return (
    <Header className="zt-header">
      <Flex className="zt-container size-full" gap={8} align="center" justify="space-between">
        <img src={Logo_src} className="ml-2 h-[32px]" />
        <div className="brand-logo">简创AIGC</div>
        <NavModule />
      </Flex>
    </Header>
  );
};
