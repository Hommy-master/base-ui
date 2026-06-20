import QUserQcode_src from '~/assets/images/QUserQR.jpg';
import './index.css';

const ServerQRcode = ({ className }: { className?: string }) => {
  return (
    <div className={`server-qrcode-ct ${className || ''}`}>
      <img src={QUserQcode_src} alt="专属客服二维码" className="server-qrcode-image" />
      <div className="server-qrcode-label">扫码添加</div>
    </div>
  );
};
export default ServerQRcode;
