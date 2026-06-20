import { Flex, Dropdown, Button, Input, Avatar, Divider, Typography, message } from 'antd';
import { CaretDown, List, User, Wallet, SignOut } from '@phosphor-icons/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { type RouteCfgType, RoutesCfg } from '~/routes/const';
import { useResponsive } from '~/hooks/useResponsive';
import { useAuth } from '~/context/AuthContext ';
import { getLoginModalStore } from '../LoginModal/store';
import { formatAmount, generateUUID, getVipExpireShow, getVipInfo } from '~/utils/function';
import { THEME_COLOR } from '~/utils/const';
import { updateApiToken } from '~/services/user';

import './index.css';

const defaultHomeActive = (path: string, currentPath: string) =>
  path === currentPath || (path === '/home' && currentPath === '/');

// 手机端底部导航显示的菜单项路径
const mobileNavPaths = ['/home'];

// 手机端底部导航组件
export const MobileBottomNav = () => {
  const location = useLocation();

  const navItems = useMemo(() => {
    return RoutesCfg.filter((item) => mobileNavPaths.includes(item.path));
  }, []);

  return (
    <div className="mobile-bottom-nav">
      {navItems.map((item) => {
        const isActive = defaultHomeActive(item.path, location.pathname);

        // 技术文档 - 有下拉菜单
        if (item.links) {
          return (
            <div
              key={item.path}
              className={`mobile-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => {
                const firstLink = item.links?.[0];
                if (firstLink) {
                  window.open(firstLink.href, '_blank');
                }
              }}
            >
              <item.icon weight={isActive ? 'fill' : 'regular'} size={22} />
              <span>{item.text}</span>
            </div>
          );
        }

        // 外部链接
        if (item.href) {
          return (
            <a
              key={item.path}
              className="mobile-nav-item"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <item.icon weight="regular" size={22} />
              <span>{item.text}</span>
            </a>
          );
        }

        // 内部路由
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`mobile-nav-item ${isActive ? 'active' : ''}`}
          >
            <item.icon weight={isActive ? 'fill' : 'regular'} size={22} />
            <span>{item.text}</span>
          </Link>
        );
      })}
    </div>
  );
};

const NavModule = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isMobile } = useResponsive();

  const { userInfo = {}, logout, fetchUserInfo } = useAuth();

  const [showMenu, setShowMenu] = useState(false);
  const [navItems, setNavItems] = useState<RouteCfgType[]>(
    RoutesCfg.map((item) => ({
      ...item,
      active: defaultHomeActive(item.path, location.pathname),
    }))
  );
  const [rotatedItemKey, setRotatedItemKey] = useState<string | null>(null);

  const startUpdateApiToken = async () => {
    const id = userInfo?.id as string;
    const { code, message: msg } = await updateApiToken({ id, apiKey: generateUUID() });
    if (code === 0) {
      await fetchUserInfo(id);
    } else {
      message.error(msg || '操作失败');
    }
  };

  const vipInfo = useMemo(() => {
    return getVipInfo(userInfo?.vipLevel as number);
  }, [userInfo?.vipLevel]);

  useEffect(() => {
    if (location.pathname !== null) {
      setNavItems(
        navItems.map((item) => ({
          ...item,
          active: defaultHomeActive(item.path, location.pathname),
        }))
      );
    }
  }, [location.pathname]);

  const _NavItem = (items: RouteCfgType[]) => {
    return (
      <>
        {items.map((item, index) => {
          if (item.hideInMenu) return null;
          const _IconText = () => (
            <>
              <item.icon weight="fill" size={20} {...item.iconProps} />
              {item.text}
              {item.links && (
                <CaretDown
                  size={14}
                  weight="bold"
                  className={`ml-1 ${rotatedItemKey === item.path ? 'rotate-icon' : ''}`}
                />
              )}
            </>
          );

          // 有下拉菜单的情况
          if (item.links) {
            const menuProps = {
              className: 'nav-dropdown-menu',
              items: item.links.map((link, linkIndex) => ({
                key: linkIndex,
                label: (
                  <a
                    href={link.href}
                    target="_blank"
                    className="flex items-center gap-2"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    <link.icon weight="fill" size={20} />
                    {link.text}
                  </a>
                ),
              })),
              onMouseEnter: () => setRotatedItemKey(item.path),
              onMouseLeave: () => setRotatedItemKey(null),
            };

            return (
              <Dropdown key={index} menu={menuProps} placement="bottom">
                <a
                  className={`nav-item ${rotatedItemKey === item.path ? 'hover' : ''}`}
                  onClick={(e) => e.preventDefault()}
                  onMouseEnter={() => setRotatedItemKey(item.path)}
                  onMouseLeave={() => setRotatedItemKey(null)}
                >
                  <_IconText />
                </a>
              </Dropdown>
            );
          }

          // 外部链接
          if (item.href) {
            return (
              <a
                className="nav-item"
                href={item.href}
                target="_blank"
                key={index}
                onClick={() => setShowMenu(!showMenu)}
              >
                <_IconText />
              </a>
            );
          }

          // 内部路由
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setShowMenu(!showMenu)}
              className={`nav-item ${item.active ? 'active' : ''}`}
            >
              <_IconText />
            </Link>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Flex className={`flex-1 zt-nav-ct`} justify="flex-end" align="center">
        {isMobile ? (
          <>
            <div className="custom-toggler mr-2" onClick={() => setShowMenu(!showMenu)}>
              <List size={32} />
            </div>
            {showMenu && (
              <Flex className="zt-nav zt-nav_expand" vertical>
                {_NavItem(navItems)}
              </Flex>
            )}
          </>
        ) : (
          <Flex className="zt-nav">{_NavItem(navItems)}</Flex>
        )}
        {userInfo?.id ? (
          <Dropdown
            menu={{
              className: 'user-dropdown-menu',
              items: [
                {
                  key: 'user-info',
                  label: (
                    <>
                      <div className="user-dropdown-info">
                        <div className="user-dropdown-avatar">
                          <Avatar size={48}>
                            <User weight="fill" size={24} />
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
                              copyable={{ text: userInfo.id || '-' }}
                              className="ml-1 packages-user-id-copy"
                            />
                          </div>
                          <div className="user-dropdown-id">
                            会员有效期：{getVipExpireShow(userInfo)}
                          </div>
                          <div className="user-dropdown-balance">
                            <Wallet weight="fill" size={16} color={THEME_COLOR} />
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
                          <SignOut size={18} weight="bold" />
                          <span>退出登录</span>
                        </Button>
                      </Flex>
                    </>
                  ),
                  disabled: true,
                },
              ],
            }}
            // trigger={['click']}
          >
            <Flex className="nav-user-avatar" align="center" onClick={() => navigate('/user-info')}>
              {userInfo.name?.slice(0, 1)}
            </Flex>
          </Dropdown>
        ) : (
          <Button
            type="primary"
            className="login-btn"
            onClick={() => (getLoginModalStore().open = true)}
          >
            登录
          </Button>
        )}
      </Flex>
    </>
  );
};

export default NavModule;
