import { Flex, FloatButton, Space } from 'antd';
import { useState } from 'react';
import { FaHeadset, FaWeixin } from 'react-icons/fa';
import QUserQcode_src from '~/assets/images/QUserQR.jpg';
import { appConfig } from '~/utils/config';
import UsModal from './usModal';

const ContactUs = () => {
  const [floatOpen, setFloatOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <FloatButton.Group
        className={`float-contact-us trigger-animate ${floatOpen && !modalOpen && 'contact-us-expand'}`}
        trigger="hover"
        icon={<FaHeadset />}
        closeIcon={<FaHeadset />}
        onOpenChange={(open) => setFloatOpen(open)}
      >
        {!modalOpen && floatOpen && (
          <Flex className="float-contact-us-content" vertical onClick={() => setModalOpen(true)}>
            <Space className="float-contact-us-header" align="center" size="small">
              <FaHeadset className="header-icon" size={24} />
              <span>{appConfig.title} 技术支持</span>
            </Space>
            <Flex className="float-contact-us-info" justify="space-between">
              <Flex vertical>
                <h4 className="float-contact-us-info-title">联系我们</h4>
                <Space className="float-contact-us-info-item" align="center" size="small">
                  专业团队为您提供帮助
                </Space>
                <Space className="float-contact-us-info-tip" align="center" size="small">
                  <FaWeixin className="tip-icon" size={24} color="#15ba11" />
                  <span>扫码添加微信咨询</span>
                </Space>
              </Flex>
              <div className="float-contact-us-info-qrcode">
                <img src={QUserQcode_src} alt="contact qrcode" />
              </div>
            </Flex>
          </Flex>
        )}
      </FloatButton.Group>
      <UsModal
        open={modalOpen}
        onCancel={() => {
          setFloatOpen(false);
          setModalOpen(false);
        }}
      />
    </>
  );
};

export default ContactUs;
