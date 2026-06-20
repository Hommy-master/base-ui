import { Flex, FloatButton, Space } from 'antd';
import { useState } from 'react';
import { FaHeadset, FaWeixin } from 'react-icons/fa';
import QUserQcode_src from '~/assets/images/QUserQR.jpg';
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
        // description="联系客服"
      >
        {!modalOpen && floatOpen && (
          <Flex className={`float-contact-us-content`} vertical onClick={() => setModalOpen(true)}>
            <Space className="float-contact-us-header" align="center" size="small">
              <FaHeadset className="header-icon" size={24} />
              <span>简创AIGC技术服务</span>
            </Space>
            <Flex className="float-contact-us-info" justify="space-between">
              <Flex vertical>
                <h4 className="float-contact-us-info-title">快速解决AI问题</h4>
                <Space className="float-contact-us-info-item" align="center" size="small">
                  成为AI领域领先，专业客服助力
                </Space>
                <Space className="float-contact-us-info-item" align="center" size="small">
                  疑难问题一对一解答，技术无忧
                </Space>
                <Space className="float-contact-us-info-tip" align="center" size="small">
                  <FaWeixin className="tip-icon" size={24} color="#15ba11" />
                  <span>扫码添加，问题解决快人一步！</span>
                </Space>
              </Flex>
              <div className="float-contact-us-info-qrcode">
                <img src={QUserQcode_src} />
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
