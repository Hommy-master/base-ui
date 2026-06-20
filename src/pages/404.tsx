import useTitle from '~/hooks/useTitle';
import { Flex, Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '~/hooks/useSEO';

const pageTitle = '页面不存在，返回';
const ErrorPage = () => {
  const navigate = useNavigate();
  useTitle('404');

  useSEO({
    title: '404 页面未找到｜简创AIGC',
    description: '抱歉，您访问的页面不存在。请检查网址是否正确，或返回首页继续浏览。',
    keywords: '404, 页面未找到, 简创AIGC',
    author: '逗赛科技',
    robots: 'noindex, nofollow',
    ogTitle: '404 页面未找到｜简创AIGC',
    ogDescription: '抱歉，您访问的页面不存在。请检查网址是否正确，或返回首页继续浏览。',
    ogUrl: 'https://jcaigc.cn/404',
    twitterCard: 'summary',
    twitterTitle: '404 页面未找到｜简创AIGC',
    twitterDescription: '抱歉，您访问的页面不存在。请检查网址是否正确，或返回首页继续浏览。',
  });

  return (
    <Flex className="size-full" justify="center" align="center" vertical>
      <Result
        status="404"
        title="404"
        subTitle="抱歉，你访问的页面不存在。"
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            返回首页
          </Button>
        }
      />
    </Flex>
  );
};

export default ErrorPage;
