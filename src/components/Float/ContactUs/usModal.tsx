import { Flex, Modal, Space } from 'antd';
import { FaLightbulb, FaPlay, FaRocket, FaWeixin } from 'react-icons/fa';
import QUserQcode_src from '~/assets/images/QUserQR.jpg';

const UsModal = ({ open, onCancel }: any) => {
  return (
    <Modal
      className="contact-us-modal"
      open={open}
      footer={null}
      onCancel={onCancel}
      zIndex={15000}
    >
      <div className="contact-us-modal-title">简创AIGC技术服务</div>
      <div className="contact-us-modal-subtitle">
        <FaWeixin className="tip-icon" size={24} color="#15ba11" /> 微信扫码添加，问题解决快人一步！
      </div>
      <img className="contact-us-modal-image" src={QUserQcode_src} />
      <div className="contact-us-modal-description">
        <h3>为什么要添加我们微信？</h3>
        <ul>
          <li>
            <FaLightbulb />
            探讨前沿AI技术与应用
          </li>
          <li>
            <FaPlay />
            实时互动，专家答疑
          </li>
          <li>
            <FaRocket />
            快速掌握AI智能体
          </li>
        </ul>
        <Flex className="contact-us-modal-cta" align="center" justify="center" gap={4}>
          <FaWeixin className="tip-icon" size={24} color="#15ba11" />
          立即扫码，开启AI新时代！
        </Flex>
      </div>
    </Modal>
  );
};
export default UsModal;
