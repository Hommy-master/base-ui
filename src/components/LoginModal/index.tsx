import { ChatCircle, Check, DeviceMobile, LockSimple, WechatLogo } from '@phosphor-icons/react';
import { Button, Modal } from 'antd';
import { useMemo, useState } from 'react';
import { FaUser, FaLock, FaVideo, FaPaperPlane, FaSignInAlt } from 'react-icons/fa';
import FeatureTag from './FeatureTag';

import Logo_src from '~/assets/images/logo.png';

import QrcodeLogin from './qrcode';
import { getLoginModalStore, useLoginModalStore } from './store';

import './index.css';

type TypeButtonProps = {
  type: 'default' | 'primary';
  color: 'default' | 'primary';
  variant?: 'filled' | 'outlined' | 'text';
};

const LoginModal = () => {
  const { open } = useLoginModalStore();
  const [loginType, setLoginType] = useState('wechat');

  const loginTypeProps = useMemo(() => {
    const activeProps: TypeButtonProps = {
      type: 'primary',
      color: 'primary',
    };
    const inactiveProps: TypeButtonProps = {
      variant: 'filled',
      type: 'default',
      color: 'default',
    };
    const isWechat = loginType !== 'phone';
    return {
      wechat: isWechat ? activeProps : inactiveProps,
      phone: isWechat ? inactiveProps : activeProps,
    };
  }, [loginType]);

  const _FeatureCheck = () => {
    return (
      <div className="purple-sphere">
        <Check size={12} color="#7e57c2" weight="bold" />
      </div>
    );
  };

  return (
    <Modal
      className="noanimation-modal"
      zIndex={1000}
      width={420}
      open={open}
      centered={true}
      maskClosable={false}
      onCancel={() => {
        getLoginModalStore().open = false;
      }}
      footer={null}
    >
      <div className="login-brand">
        {/* <div className="login-logo">
          <ChatCircle size={32} color="#15ba11" weight="fill" />
          <div className="logo-text">
            <Check size={18} color="#4e6ef2" weight="bold" />
          </div>
        </div> */}
        <img src={Logo_src} className="login-logo" />
        <h2 className="login-brand-text">简创AIGC</h2>
      </div>
      {/* <h3 className="login-title">欢迎登录</h3> */}
      <p className="login-subtitle">提供专业的插件和智能体定制开发服务</p>
      {/* <div className="login-tabs">
        <Button
          // disabled
          {...loginTypeProps.wechat}
          icon={<WechatLogo size={24} weight="duotone" />}
          shape="round"
          size="large"
          onClick={() => {
            setLoginType('wechat');
          }}
        >
          微信登录
        </Button>
        <Button
          {...loginTypeProps.phone}
          icon={<LockSimple size={24} weight="duotone" />}
          shape="round"
          size="large"
          onClick={() => {
            setLoginType('phone');
          }}
        >
          密码登录
        </Button>
      </div> */}
      <div className="login-content-wrapper">
        {/* {loginType === 'phone' ? <UserLogin /> : <QrcodeLogin />} */}
        <QrcodeLogin />
      </div>
      {/* 特性标签区域 */}
      <div className="features">
        <FeatureTag icon={<FaVideo />} name="视频编辑" color="video" animation="pulse" />

        <FeatureTag
          icon={
            <img
              src={`${import.meta.env.BASE_URL}jianying_s.png`}
              alt="剪映小助手"
              className="login-feature-jianying-icon"
              decoding="async"
            />
          }
          name="剪映小助手"
          color="jianying"
          animation="float"
        />

        <FeatureTag icon={<FaPaperPlane />} name="邮件发送" color="email" animation="rotate" />
      </div>
      {/* 动态生成粒子动画的CSS变量 */}
      <style>{`
        .feature-tag .feature-particle {
          --tx: ${Math.random() * 40 - 20}px;
          --ty: ${Math.random() * 40 - 20}px;
        }
      `}</style>
    </Modal>
  );
};

export default LoginModal;
