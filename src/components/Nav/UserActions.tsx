import { Avatar, Button, Divider, Dropdown, Flex, Typography } from 'antd';
import { FaSignOutAlt, FaUser, FaWallet } from 'react-icons/fa';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '~/context/AuthContext';
import { getLoginModalStore } from '../LoginModal/store';
import { formatAmount, getVipExpireShow, getVipInfo } from '~/utils/function';
import { THEME_COLOR } from '~/utils/const';
import type { UserLoginResult } from '~/services/login';

type UserActionsProps = {
  compact?: boolean;
};

const userDropdownMenu = (
  userInfo: Partial<UserLoginResult>,
  vipInfo: ReturnType<typeof getVipInfo>,
  logout: () => void
) => ({
  className: 'user-dropdown-menu',
  items: [
    {
      key: 'user-info',
      label: (
        <>
          <div className="user-dropdown-info">
            <div className="user-dropdown-avatar">
              <Avatar size={48}>
                <FaUser size={24} />
              </Avatar>
              <div className={`user-level-badge ${vipInfo.class}`}>
                {userInfo?.vipLevel === 0 ? '普通' : vipInfo.text}
              </div>
            </div>
            <div className="user-dropdown-details">
              <div className="user-dropdown-name">{userInfo.name || '未登录'}</div>
              <div className="user-dropdown-id">
                ID: {userInfo.id || '-'}
                <Typography.Text
                  copyable={{ text: String(userInfo.id || '-') }}
                  className="ml-1 packages-user-id-copy"
                />
              </div>
              <div className="user-dropdown-id">会员有效期：{getVipExpireShow(userInfo)}</div>
              <div className="user-dropdown-balance">
                <FaWallet size={16} color={THEME_COLOR} />
                积分余额：
                <span className="user-dropdown-balance-text">
                  {formatAmount(userInfo.points || 0)}
                </span>
              </div>
            </div>
          </div>
          <Divider className="my-3" />
          <Flex className="user-dropdown-logout px-[12px] pt-1 pb-2">
            <Button
              color="default"
              variant="filled"
              className="user-dropdown-logout-btn flex-1"
              onClick={() => logout()}
            >
              <FaSignOutAlt size={18} />
              <span>退出登录</span>
            </Button>
          </Flex>
        </>
      ),
      disabled: true,
    },
  ],
});

const UserActions = ({ compact }: UserActionsProps) => {
  const navigate = useNavigate();
  const { userInfo = {}, logout } = useAuth();

  const vipInfo = useMemo(() => getVipInfo(userInfo?.vipLevel as number), [userInfo?.vipLevel]);

  if (userInfo?.id) {
    if (compact) {
      return (
        <Dropdown menu={userDropdownMenu(userInfo, vipInfo, logout)} trigger={['click']}>
          <button type="button" className="zt-sider-user-panel">
            <Avatar size={40} className="zt-sider-user-avatar">
              {userInfo.name?.slice(0, 1) || <FaUser size={18} />}
            </Avatar>
            <Flex vertical align="flex-start" className="zt-sider-user-meta">
              <span className="zt-sider-user-name">{userInfo.name || '未登录'}</span>
              <span className="zt-sider-user-id">
                ID: {userInfo.id || '-'}
                <Typography.Text
                  copyable={{ text: userInfo.id || '-' }}
                  className="zt-sider-user-id-copy"
                  onClick={(e) => e.stopPropagation()}
                />
              </span>
            </Flex>
          </button>
        </Dropdown>
      );
    }

    return (
      <Dropdown menu={userDropdownMenu(userInfo, vipInfo, logout)}>
        <Flex className="nav-user-avatar" align="center" onClick={() => navigate('/user-info')}>
          {userInfo.name?.slice(0, 1)}
        </Flex>
      </Dropdown>
    );
  }

  return (
    <Button
      type="primary"
      className={`login-btn ${compact ? 'login-btn_compact' : ''}`}
      block={compact}
      onClick={() => (getLoginModalStore().open = true)}
    >
      登录
    </Button>
  );
};

export default UserActions;
