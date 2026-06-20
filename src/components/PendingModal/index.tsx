import { Modal } from 'antd';
import { getPendingModalStore, usePendingModalStore } from '~/components/PendingModal/store';

import './index.css';

const PendingModal = (props: any) => {
  const { open, modalText } = usePendingModalStore();
  const handleCancel = () => (getPendingModalStore().open = false);
  return (
    <Modal open={open} onCancel={handleCancel} footer={null} {...props}>
      <div className="pending-content">
        <div className="pending-icon-wrapper">
          <div className="pending-icon">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="hourglass-half"
              className="svg-inline--fa fa-hourglass-half "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l0 11c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437l0 11c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 256 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-11c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1l0-11c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 0 64 0 32 0zM96 75l0-11 192 0 0 11c0 19-5.6 37.4-16 53L112 128c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9L192 301.3l67.9 67.9c4.6 4.6 8.6 9.6 12.1 14.9L112 384z"
              ></path>
            </svg>
          </div>
        </div>
        <h3 className="pending-title">{modalText}功能正在开发中</h3>
        <p className="pending-text">我们正在全力打造更精彩的体验，敬请期待！</p>
        <div className="pending-coming-soon">
          <span className="letter">敬</span>
          <span className="letter">请</span>
          <span className="letter">期</span>
          <span className="letter">待</span>
        </div>
        <button className="pending-button" onClick={handleCancel}>
          <span>我知道了</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-right"
            className="svg-inline--fa fa-arrow-right button-icon"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            ></path>
          </svg>
        </button>
      </div>
    </Modal>
  );
};

export default PendingModal;
