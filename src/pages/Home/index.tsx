import Footer from './Footer';

import './index.css';
import { useEffect } from 'react';
import { getLoginModalStore } from '~/components/LoginModal/store';
import { useSEO } from '~/hooks/useSEO';

const HomePage = () => {
  useSEO({
    title: 'AI视频创作平台｜扣子工作流市场｜AI智能体模板下载与交易｜简创AIGC',
    description:
      '简创AIGC是一个领先的AI视频创作平台，提供智能视频编辑、剪辑、特效添加等功能，帮助用户快速制作高质量视频内容。',
    keywords:
      'AI视频创作, 视频编辑, 智能剪辑, AI剪辑, 批量剪辑, AI生成, 视频特效, 简创AIGC, 开源剪映小助手capcut-mate',
    author: '逗赛科技',
    robots: 'index, follow',
    ogTitle: 'AI视频创作平台｜扣子工作流市场｜AI智能体模板下载与交易｜简创AIGC',
    ogDescription:
      '简创AIGC是一个领先的AI视频创作平台，提供智能视频编辑、剪辑、特效添加等功能，帮助用户快速制作高质量视频内容。',
    ogUrl: 'https://jcaigc.cn/',
    twitterCard: 'summary_large_image',
    twitterTitle: 'AI视频创作平台｜扣子工作流市场｜AI智能体模板下载与交易｜简创AIGC',
    twitterDescription:
      '简创AIGC是一个领先的AI视频创作平台，提供智能视频编辑、剪辑、特效添加等功能，帮助用户快速制作高质量视频内容。',
  });

  useEffect(() => {
    getLoginModalStore().open = false;
  }, []);
  return (
    <div className="home-page overflow-hidden-x">
      <Footer />
    </div>
  );
};

export default HomePage;
