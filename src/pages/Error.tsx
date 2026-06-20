import useTitle from '~/hooks/useTitle';
import { Flex, Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '~/hooks/useSEO';

const pageTitle = '访问出错';
const ErrorPage = () => {
  const navigate = useNavigate();
  useTitle(pageTitle);

  useSEO({
    title: '访问出错｜简创AIGC',
    description: '抱歉，访问出现了错误。请稍后重试或返回首页继续浏览。',
    keywords: '访问出错, 错误页面, 简创AIGC',
    author: '逗赛科技',
    robots: 'noindex, nofollow',
    ogTitle: '访问出错｜简创AIGC',
    ogDescription: '抱歉，访问出现了错误。请稍后重试或返回首页继续浏览。',
    ogUrl: 'https://jcaigc.cn/error',
    twitterCard: 'summary',
    twitterTitle: '访问出错｜简创AIGC',
    twitterDescription: '抱歉，访问出现了错误。请稍后重试或返回首页继续浏览。',
  });

  return (
    <Flex className="size-full" justify="center" align="center" vertical>
      <Result
        status="error"
        title={pageTitle}
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
