import { Flex } from 'antd';
import ICP_src from '~/assets/images/ICP.png';
import GWA_src from '~/assets/images/GWA.png';
import { useResponsive } from '~/hooks';
const Footer = () => {
  const { isMobile } = useResponsive();
  return (
    <footer className="bg-[#f8fafc] text-[#718096] py-4">
      <Flex
        className="container text-xs"
        align="center"
        justify="center"
        gap={12}
        vertical={isMobile}
      >
        <span>&copy; 2026 深圳市逗赛科技有限责任公司所有</span>
        <span>
          <img src={ICP_src} alt="工商网监" width={16} />{' '}
          <a className="text-link" href="https://beian.miit.gov.cn/" target="_blank">
            粤ICP备2025431894号
          </a>
        </span>
        <span>
          <img src={GWA_src} alt="粤公网安" width={16} />{' '}
          <a
            className="text-link"
            href="https://beian.mps.gov.cn/#/query/webSearch?code=44030002007400"
            target="_blank"
          >
            粤公网安备44030002007400号
          </a>
        </span>
      </Flex>
    </footer>
  );
};
export default Footer;
